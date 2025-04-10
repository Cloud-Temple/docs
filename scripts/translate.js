#!/usr/bin/env node

/**
 * CloudTemple Documentation Translation Script
 * 
 * This script automatically translates Markdown documentation from French to other languages
 * using the DragonflyGroup LLM API. It tracks source content hashes to determine if a
 * translation is outdated and only retranslates files when their French source has changed.
 */

const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Configuration
const API_URL = process.env.DRAGONFLY_API_URL;
const API_KEY = process.env.DRAGONFLY_API_KEY;
const DOC_BASE_PATH = process.env.DOC_BASE_PATH || '.';
const TRANSLATION_MODEL = process.env.TRANSLATION_MODEL || 'gpt-4o';
const TRANSLATION_TEMPERATURE = parseFloat(process.env.TRANSLATION_TEMPERATURE || '1');
const TRANSLATION_TOP_P = parseFloat(process.env.TRANSLATION_TOP_P || '1');

// Validate required environment variables
if (!API_URL) {
  console.error('Error: DRAGONFLY_API_URL environment variable is not defined');
  process.exit(1);
}

if (!API_KEY) {
  console.error('Error: DRAGONFLY_API_KEY environment variable is not defined');
  process.exit(1);
}

// Language mapping
const LANGUAGES = {
  'en': 'English',
  'de': 'Deutsch',
  'es': 'Español',
  'it': 'Italiano'
};

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const forceTranslation = args.includes('--force');
const isInitMode = args.includes('--init');
const translateMissing = args.includes('--translate-missing');
const targetLang = args.find(arg => arg.startsWith('--lang='))?.split('=')[1];

// Statistics tracking
const stats = {
  processed: 0,
  translated: 0,
  skipped: 0,
  errors: 0,
  copied: 0
};

/**
 * Compute SHA-256 hash of file content
 * @param {string} filePath - Path to the file
 * @returns {string} - SHA-256 hash
 */
function computeFileHash(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return crypto.createHash('sha256').update(content).digest('hex');
}

/**
 * Check if translation is needed for a file
 * @param {string} filePath - Path to the source file
 * @param {string} lang - Target language code
 * @param {Object} translationMeta - Translation metadata
 * @returns {boolean} - Whether translation is needed
 */
function isTranslationNeeded(filePath, lang, translationMeta) {
  if (forceTranslation) {
    return true;
  }

  const relativePath = path.relative(path.join(DOC_BASE_PATH, 'docs'), filePath);
  
  // Check if file exists in meta and has hash for this language
  if (translationMeta[relativePath] && translationMeta[relativePath][lang]) {
    const storedHash = translationMeta[relativePath][lang];
    const currentHash = computeFileHash(filePath);
    return storedHash !== currentHash;
  }
  
  // No existing translation or hash for this language
  return true;
}

/**
 * Split content into blocks for translation
 * @param {string} content - Content to split
 * @param {number} maxTokens - Maximum tokens per block
 * @returns {string[]} - Array of content blocks
 */
function splitContentIntoBlocks(content, maxTokens = 10000) {
  const lines = content.split('\n');
  const blocks = [];
  let buffer = '';

  for (const line of lines) {
    if ((buffer + line).length > maxTokens) {
      blocks.push(buffer);
      buffer = line + '\n';
    } else {
      buffer += line + '\n';
    }
  }

  if (buffer) {
    blocks.push(buffer);
  }

  return blocks;
}

/**
 * Translate text using the DragonflyGroup API
 * @param {string} text - Text to translate
 * @param {string} targetLang - Target language code
 * @param {string} targetLangName - Target language name
 * @returns {Promise<string>} - Translated text
 */
async function translateTextBlock(text, targetLang, targetLangName) {
  const maxRetries = 5;
  let retryCount = 0;

  // Log translation request details
  console.log(`Translation request details:`);
  console.log(`- Model: ${TRANSLATION_MODEL}`);
  console.log(`- Target language: ${targetLang} (${targetLangName})`);
  console.log(`- Temperature: ${TRANSLATION_TEMPERATURE}`);
  console.log(`- Top_p: ${TRANSLATION_TOP_P}`);
  console.log(`- Text length: ${text.length} characters`);

  while (retryCount < maxRetries) {
    try {
      console.log(`Sending request to API...`);
      
      const response = await axios.post(
        API_URL,
        {
          messages: [{
            role: 'user',
            content: [{ type: 'text', text }]
          }],
          model: TRANSLATION_MODEL,
          temperature: TRANSLATION_TEMPERATURE,
          top_p: TRANSLATION_TOP_P,
          promptSystem: `You are a technical translator specialized in Cloud computing, IT systems, and software engineering. 
Your task is to translate plain text from French to ${targetLangName} while strictly preserving the structure and formatting of the original Markdown file. 
Follow these rules strictly: 
1. Do not modify, translate, or interpret any HTML or Markdown elements, such as \`<a>\`, \`<div>\`, or \`#\` headers. 
2. Do not alter the content inside code blocks (\` \`\`\` \`) or inline code (\` \`code\` \`). 
3. Do not translate or modify text inside square brackets \`[]\`, parentheses \`()\`, or URLs. 
4. Do not add or modify any new lines, spaces, or formatting outside of the original text. 
5. If the content includes raw HTML, do not alter or translate it; leave it exactly as it appears. 
Your sole task is to translate only the plain text content outside of code, Markdown, or HTML elements, while ensuring that all formatting and structural integrity are preserved. 
The goal is to produce a translation that is technically accurate, professional, and maintains the original file's structure without any unintended changes.`,
          stream: false,
          threadId: ''
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Log response details
      console.log(`API response received:`);
      console.log(`- Status code: ${response.status}`);
      console.log(`- Model used: ${response.data.response?.model || 'unknown'}`);
      console.log(`- Tokens used: ${response.data.response?.usage?.total_tokens || 'unknown'}`);

      if (response.status === 200 && response.data.response?.choices?.length > 0) {
        const translatedText = response.data.response.choices[0].message.content;
        console.log(`Translation successful (${translatedText.length} characters)`);
        return translatedText;
      } else {
        console.error(`API error: ${response.status} - ${JSON.stringify(response.data)}`);
      }
    } catch (error) {
      console.error(`Error translating text (attempt ${retryCount + 1}/${maxRetries}):`, error.message);
      
      if (error.response) {
        console.error(`Status: ${error.response.status}, Data:`, error.response.data);
      }
    }

    retryCount++;
    console.log(`Retrying in 5 seconds (Attempt ${retryCount}/${maxRetries})...`);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  throw new Error(`Translation failed after ${maxRetries} attempts`);
}

/**
 * Translate content in blocks
 * @param {string} content - Content to translate
 * @param {string} targetLang - Target language code
 * @param {string} targetLangName - Target language name
 * @returns {Promise<string>} - Translated content
 */
async function translateContent(content, targetLang, targetLangName) {
  console.log(`Starting translation for ${targetLang} (${targetLangName}). Text size: ${content.length} characters.`);
  
  const blocks = splitContentIntoBlocks(content);
  console.log(`Content divided into ${blocks.length} block(s) for translation.`);
  
  let translatedContent = '';
  
  for (let i = 0; i < blocks.length; i++) {
    console.log(`Translating block ${i + 1}/${blocks.length}...`);
    try {
      const translatedBlock = await translateTextBlock(blocks[i], targetLang, targetLangName);
      translatedContent += translatedBlock + '\n';
    } catch (error) {
      console.error(`Error translating block ${i + 1}:`, error.message);
      stats.errors++;
      // Continue with next block instead of failing the entire file
      translatedContent += blocks[i] + '\n';
    }
  }
  
  console.log(`Translation for ${targetLang} (${targetLangName}) completed.`);
  return translatedContent.trim();
}

/**
 * Save translated content to file
 * @param {string} content - Translated content
 * @param {string} sourceHash - Source file hash (stored in metadata only, not in the file)
 * @param {string} sourcePath - Source file path
 * @param {string} targetLang - Target language code
 */
async function saveTranslatedFile(content, sourceHash, sourcePath, targetLang) {
  const relativePath = path.relative(path.join(DOC_BASE_PATH, 'docs'), sourcePath);
  const targetPath = path.join(
    DOC_BASE_PATH,
    'i18n',
    targetLang,
    'docusaurus-plugin-content-docs',
    'current',
    relativePath
  );
  
  // Create target directory if it doesn't exist
  await fs.ensureDir(path.dirname(targetPath));
  
  // Write translated content to file (without hash comment)
  await fs.writeFile(targetPath, content, 'utf8');
  console.log(`Translated file saved: ${targetPath}`);
}

/**
 * Check if a file should be copied rather than translated
 * @param {string} filePath - Path to the file
 * @returns {boolean} - Whether the file should be copied
 */
function shouldCopyFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  // Only translate .md files, copy everything else
  // .docx files, images, and other non-Markdown files are copied without translation
  return ext !== '.md';
}

/**
 * Check if two files are identical (for binary files)
 * @param {string} sourceFile - Source file path
 * @param {string} targetFile - Target file path
 * @returns {Promise<boolean>} - Whether the files are identical
 */
async function areFilesIdentical(sourceFile, targetFile) {
  try {
    // If target doesn't exist, they're not identical
    if (!fs.existsSync(targetFile)) {
      return false;
    }
    
    // Compare file sizes first (quick check)
    const sourceStats = await fs.stat(sourceFile);
    const targetStats = await fs.stat(targetFile);
    
    if (sourceStats.size !== targetStats.size) {
      return false;
    }
    
    // For .docx files, just compare sizes (to avoid unnecessary binary comparisons)
    if (path.extname(sourceFile).toLowerCase() === '.docx') {
      console.log(`Files have identical size (${sourceStats.size} bytes), skipping content comparison for .docx`);
      return true;
    }
    
    // For other files, compare actual content
    const sourceContent = await fs.readFile(sourceFile);
    const targetContent = await fs.readFile(targetFile);
    return sourceContent.equals(targetContent);
  } catch (error) {
    console.error(`Error comparing files: ${error.message}`);
    return false; // If there's an error, assume files are different
  }
}

/**
 * Copy non-Markdown file to target directory
 * @param {string} sourcePath - Source file path
 * @param {string} targetLang - Target language code
 */
async function copyNonMarkdownFile(sourcePath, targetLang) {
  // Skip system files
  if (path.basename(sourcePath).startsWith('.')) {
    return;
  }
  
  const relativePath = path.relative(path.join(DOC_BASE_PATH, 'docs'), sourcePath);
  const targetPath = path.join(
    DOC_BASE_PATH,
    'i18n',
    targetLang,
    'docusaurus-plugin-content-docs',
    'current',
    relativePath
  );
  
  // Create target directory if it doesn't exist
  await fs.ensureDir(path.dirname(targetPath));
  
  // Check if files are identical before copying
  const identical = await areFilesIdentical(sourcePath, targetPath);
  
  if (identical) {
    console.log(`Skipping copy of identical file: ${relativePath}`);
    return;
  }
  
  // Special handling for .docx files
  if (path.extname(sourcePath).toLowerCase() === '.docx') {
    console.log(`Copying .docx file: ${relativePath} (preserving file attributes)`);
    
    // For .docx files, use a more careful copy approach
    try {
      // On Unix-like systems
      if (process.platform !== 'win32') {
        const { execSync } = require('child_process');
        // On macOS, use -p instead of --preserve=all
        if (process.platform === 'darwin') {
          execSync(`cp -p "${sourcePath}" "${targetPath}"`);
        } else {
          // On Linux, use --preserve=all
          execSync(`cp --preserve=all "${sourcePath}" "${targetPath}"`);
        }
      } else {
        // On Windows, use fs.copyFileSync with COPYFILE_FICLONE flag
        fs.copyFileSync(sourcePath, targetPath, fs.constants.COPYFILE_FICLONE);
      }
      console.log(`File copied with preserved attributes: ${targetPath}`);
    } catch (error) {
      console.error(`Error copying .docx file with preserved attributes: ${error.message}`);
      // Fall back to regular copy
      await fs.copy(sourcePath, targetPath);
      console.log(`File copied with regular method: ${targetPath}`);
    }
  } else {
    // Regular copy for other files
    await fs.copy(sourcePath, targetPath);
    console.log(`File copied: ${targetPath}`);
  }
  
  stats.copied++;
}

/**
 * Check if a translation file exists for a given source file and language
 * @param {string} sourcePath - Path to the source file
 * @param {string} lang - Target language code
 * @returns {boolean} - Whether the translation file exists
 */
function translationFileExists(sourcePath, lang) {
  const relativePath = path.relative(path.join(DOC_BASE_PATH, 'docs'), sourcePath);
  const targetPath = path.join(
    DOC_BASE_PATH,
    'i18n',
    lang,
    'docusaurus-plugin-content-docs',
    'current',
    relativePath
  );
  
  return fs.existsSync(targetPath);
}

// The extractHashFromTranslatedFile function has been removed since we no longer store hashes in the translated files

/**
 * Initialize translation metadata for existing files
 * @param {string} filePath - Path to the source file
 * @param {Object} translationMeta - Translation metadata
 * @returns {Promise<Object>} - Updated translation metadata
 */
async function initializeFile(filePath, translationMeta) {
  stats.processed++;
  const relativePath = path.relative(path.join(DOC_BASE_PATH, 'docs'), filePath);
  
  // Initialize metadata entry if it doesn't exist
  if (!translationMeta[relativePath]) {
    translationMeta[relativePath] = {};
  }
  
  // Only process Markdown files for initialization
  if (!shouldCopyFile(filePath)) {
    const sourceHash = computeFileHash(filePath);
    
    // Process each target language
    for (const [lang, langName] of Object.entries(LANGUAGES)) {
      // Skip if specific language is requested and this isn't it
      if (targetLang && lang !== targetLang) {
        continue;
      }
      
      const targetFilePath = path.join(
        DOC_BASE_PATH,
        'i18n',
        lang,
        'docusaurus-plugin-content-docs',
        'current',
        relativePath
      );
      
      if (isDryRun) {
        if (translationFileExists(filePath, lang)) {
          console.log(`[DRY RUN] Would initialize metadata for: ${relativePath} in ${lang}`);
        } else if (translateMissing) {
          console.log(`[DRY RUN] Would translate missing file: ${relativePath} to ${lang}`);
        } else {
          console.log(`[DRY RUN] Would skip missing translation: ${relativePath} for ${lang}`);
        }
        continue;
      }
      
      if (translationFileExists(filePath, lang)) {
        // Translation exists, record the hash
        console.log(`Initializing metadata for: ${relativePath} in ${lang}`);
        translationMeta[relativePath][lang] = sourceHash;
        stats.skipped++;
      } else if (translateMissing) {
        // Translation doesn't exist but --translate-missing is set
        try {
          console.log(`Translating missing file: ${relativePath} to ${lang}`);
          const sourceContent = await fs.readFile(filePath, 'utf8');
          const translatedContent = await translateContent(sourceContent, lang, langName);
          await saveTranslatedFile(translatedContent, sourceHash, filePath, lang);
          
          // Update metadata
          translationMeta[relativePath][lang] = sourceHash;
          stats.translated++;
        } catch (error) {
          console.error(`Error processing ${relativePath} for ${lang}:`, error.message);
          stats.errors++;
        }
      } else {
        // Translation doesn't exist and --translate-missing is not set
        console.log(`Skipping missing translation: ${relativePath} for ${lang}`);
      }
    }
  } else {
    // For non-Markdown files, just copy them if --translate-missing is set
    if (translateMissing) {
      for (const lang of Object.keys(LANGUAGES)) {
        // Skip if specific language is requested and this isn't it
        if (targetLang && lang !== targetLang) {
          continue;
        }
        
        if (isDryRun) {
          console.log(`[DRY RUN] Would copy: ${relativePath} to ${lang}`);
          continue;
        }
        
        try {
          await copyNonMarkdownFile(filePath, lang);
        } catch (error) {
          console.error(`Error copying ${relativePath} to ${lang}:`, error.message);
          stats.errors++;
        }
      }
    }
  }
  
  return translationMeta;
}

/**
 * Process a single file for translation
 * @param {string} filePath - Path to the file
 * @param {Object} translationMeta - Translation metadata
 * @returns {Promise<Object>} - Updated translation metadata
 */
async function processFile(filePath, translationMeta) {
  stats.processed++;
  const relativePath = path.relative(path.join(DOC_BASE_PATH, 'docs'), filePath);
  
  // Initialize metadata entry if it doesn't exist
  if (!translationMeta[relativePath]) {
    translationMeta[relativePath] = {};
  }
  
  // Process file based on type
  if (!shouldCopyFile(filePath)) {
    // Process Markdown file
    const sourceHash = computeFileHash(filePath);
    const sourceContent = await fs.readFile(filePath, 'utf8');
    
    // Process each target language
    for (const [lang, langName] of Object.entries(LANGUAGES)) {
      // Skip if specific language is requested and this isn't it
      if (targetLang && lang !== targetLang) {
        continue;
      }
      
      if (isDryRun) {
        if (isTranslationNeeded(filePath, lang, translationMeta)) {
          console.log(`[DRY RUN] Would translate: ${relativePath} to ${lang}`);
        } else {
          console.log(`[DRY RUN] Would skip: ${relativePath} for ${lang} (up-to-date)`);
        }
        continue;
      }
      
      if (isTranslationNeeded(filePath, lang, translationMeta)) {
        try {
          console.log(`Translating: ${relativePath} to ${lang}`);
          const translatedContent = await translateContent(sourceContent, lang, langName);
          await saveTranslatedFile(translatedContent, sourceHash, filePath, lang);
          
          // Update metadata
          translationMeta[relativePath][lang] = sourceHash;
          stats.translated++;
        } catch (error) {
          console.error(`Error processing ${relativePath} for ${lang}:`, error.message);
          stats.errors++;
        }
      } else {
        console.log(`Skipping: ${relativePath} for ${lang} (up-to-date)`);
        stats.skipped++;
      }
    }
  } else {
    // Copy non-Markdown file
    for (const lang of Object.keys(LANGUAGES)) {
      // Skip if specific language is requested and this isn't it
      if (targetLang && lang !== targetLang) {
        continue;
      }
      
      if (isDryRun) {
        console.log(`[DRY RUN] Would copy: ${relativePath} to ${lang}`);
        continue;
      }
      
      try {
        await copyNonMarkdownFile(filePath, lang);
      } catch (error) {
        console.error(`Error copying ${relativePath} to ${lang}:`, error.message);
        stats.errors++;
      }
    }
  }
  
  return translationMeta;
}

/**
 * Get all files in a directory recursively
 * @param {string} dir - Directory to scan
 * @returns {Promise<string[]>} - Array of file paths
 */
async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

/**
 * Main function
 */
async function main() {
  console.log('CloudTemple Documentation Translation Script');
  console.log('===========================================');
  
  // Validate paths
  const docsDir = path.join(DOC_BASE_PATH, 'docs');
  const i18nDir = path.join(DOC_BASE_PATH, 'i18n');
  const metaFilePath = path.join(DOC_BASE_PATH, 'scripts', 'translation-meta.json');
  
  if (!fs.existsSync(docsDir)) {
    console.error(`Error: Source directory '${docsDir}' does not exist`);
    process.exit(1);
  }
  
  // Create i18n directory if it doesn't exist
  await fs.ensureDir(i18nDir);
  
  // Load translation metadata
  let translationMeta = {};
  if (fs.existsSync(metaFilePath)) {
    try {
      translationMeta = JSON.parse(await fs.readFile(metaFilePath, 'utf8'));
      console.log('Loaded existing translation metadata');
    } catch (error) {
      console.error('Error loading translation metadata:', error.message);
      console.log('Starting with empty metadata');
    }
  } else {
    console.log('No existing translation metadata found, creating new file');
  }
  
  // Get all files in docs directory
  const files = await getFiles(docsDir);
  console.log(`Found ${files.length} files in '${docsDir}'`);
  
  if (isDryRun) {
    console.log('DRY RUN MODE - No files will be modified');
  }
  
  // Process each file
  if (isInitMode) {
    console.log('INITIALIZATION MODE - Creating hashes for existing files');
    if (translateMissing) {
      console.log('Will also translate missing files');
    } else {
      console.log('Skipping missing translations (use --translate-missing to translate them)');
    }
    
    // Initialize metadata for each file
    for (const file of files) {
      translationMeta = await initializeFile(file, translationMeta);
    }
  } else {
    // Normal translation mode
    for (const file of files) {
      translationMeta = await processFile(file, translationMeta);
    }
  }
  
  // Save updated translation metadata
  if (!isDryRun) {
    await fs.writeFile(metaFilePath, JSON.stringify(translationMeta, null, 2), 'utf8');
    console.log(`Translation metadata saved to ${metaFilePath}`);
  }
  
  // Print statistics
  console.log('\nTranslation Statistics:');
  console.log(`- Files processed: ${stats.processed}`);
  console.log(`- Files translated: ${stats.translated}`);
  console.log(`- Files skipped (up-to-date): ${stats.skipped}`);
  console.log(`- Files copied (non-Markdown): ${stats.copied}`);
  console.log(`- Errors encountered: ${stats.errors}`);
  
  if (stats.errors > 0) {
    console.log('\nWarning: Some errors occurred during translation. Check the logs above for details.');
    process.exit(1);
  }
  
  console.log('\nTranslation completed successfully!');
}

// Run the script
main().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
});
