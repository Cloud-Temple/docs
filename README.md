# Cloud Temple Documentation

Welcome to the official documentation repository for Cloud Temple.
Here, you’ll find guides and resources to help you better understand and utilize Cloud Temple’s services and solutions.

A __PROD__ version of this documentation is available [here](https://docs.cloud-temple.com). This repository and the website are synchronized to ensure up-to-date content.

A __DEV__ version of this documentation is available [here](https://cloud-temple.github.io/docs/).

This project is continuously updated with new guides and improvements.

# Contributing
We value your contributions! Whether it’s improving an existing guide or creating a new one, your input helps us make this repository better.

## How to Contribute

	1.	Fork this repository: Clone your fork to your local environment.
	2.	Make your changes: Update or create guides.
	3.	Submit a Pull Request (PR): Propose your changes to the develop branch.

Our team will review your contribution, provide feedback if needed, and integrate approved changes.

## Guidelines for Contributions

	•	Ensure your contributions are accurate, tested, and well-documented.
	•	Include a brief explanation of your changes in the PR comments.
	•	Follow the structure and style of existing guides for consistency.

# Licensing

By contributing to this repository, you agree to the terms outlined in the LICENSE file.

# Working Locally with Docker

To get started, follow these simple steps:

1. Navigate to the Docker directory:
```bash
cd docker/local
```

2. Launch the services with Docker Compose:
```bash
docker compose up
```

3. Access the documentation locally:

Open your browser and go to: <http://localhost:3000/docs/>

> Base url is set to "/docs" when running on non production build (locally or deployed on github pages)

🎉 Your local environment is ready!

# Build and run locally in production mode

To get started, follow these simple steps:

1. Build the docker image:
```bash
docker build -t docs:v3 . -f docker/production/Dockerfile
```

2. Launch the services with Docker Compose:
```bash
docker run -it --rm -p 8080:80 --name docs docs:v3
```

3. Access the documentation locally (all pages and all langages should work):

Open your browser and go to: <http://localhost:8080>

> Base url is set to "/" on production build

# Translation Workflow

This documentation supports multiple languages. The primary content is written in French (in the `/docs/` directory) and automatically translated to other languages using the **Cloud Temple LLMaaS API** with an advanced Python system.

## 🐍 Modern Translation System (Recommended)

The new Python-based translation system provides intelligent change detection, modern UI, and optimized performance.

### Prerequisites

1. Install Python dependencies:
```bash
cd scripts/translate_py
pip install -r requirements.txt
```

2. Configure the translation API credentials in `scripts/translate_py/.env`:
```bash
# Copy template and edit
cp scripts/translate_py/.env.example scripts/translate_py/.env

# Configure your API credentials
CLOUDTEMPLE_API_KEY=your_api_key_here
CLOUDTEMPLE_API_URL=https://api.ai.cloud-temple.com/v1/chat/completions
TRANSLATION_MODEL=qwen3:30b-a3b
CONCURRENT_TRANSLATIONS=8
TRANSLATION_TEMPERATURE=0.1
```

### Generating Translations

After adding or modifying French content in the `/docs/` directory:

```bash
# Translate all outdated files to all supported languages (en, de, es, it)
python scripts/translate_py/translate.py

# Translate only to a specific language (e.g., English)
python scripts/translate_py/translate.py --lang=en

# Perform a dry run (shows what would be translated without making changes)
python scripts/translate_py/translate.py --dry-run

# Force retranslation of all files (ignores hash comparison)
python scripts/translate_py/translate.py --force

# Initialize metadata for existing translations (first-time setup)
python scripts/translate_py/translate.py --init

# Initialize metadata and translate any missing files
python scripts/translate_py/translate.py --init --translate-missing

# Debug mode with detailed logs
python scripts/translate_py/translate.py --debug --dry-run
```

### First-Time Setup

For new installations or when you have existing translations:

1. **Initialize metadata** to create hash tracking for all existing files:
   ```bash
   python scripts/translate_py/translate.py --init
   ```
   This creates `scripts/translate_py/translation-meta.json` with SHA-256 hashes.

2. **Initialize and translate missing files**:
   ```bash
   python scripts/translate_py/translate.py --init --translate-missing
   ```

After initialization, the system will only translate new or modified files based on intelligent SHA-256 hash comparison.

## How the Modern System Works

The Python translation system features:

### 🔍 **Intelligent Change Detection**
- **SHA-256 hashing**: Precise detection of file modifications
- **Metadata persistence**: Tracks translation state for 123+ files across 4 languages
- **Smart decision logic**:
  - New file (no hash stored) → Translates
  - Modified file (hash different) → Translates  
  - Missing translation → Translates
  - Unchanged file (hash identical) → Skips

### 🎨 **Modern Interface**
- **Real-time progress bars**: Live translation status
- **Rich statistics**: Tokens IN/OUT, processing speed, completion rates
- **Detailed logging**: Clear explanations for each translation decision
- **Debug mode**: Hash comparison with before/after values

### ⚡ **Optimized Performance**
- **Concurrent processing**: 8 parallel translation workers (configurable)
- **Intelligent batching**: Optimizes API usage patterns
- **Error resilience**: Automatic retry with exponential backoff
- **Resource efficiency**: Only processes changed files

### 🚫 **Advanced Features**
- **`.notranslation` support**: Place this file in directories to force copy instead of translation
- **Auto-detection**: Automatically finds project root and configures paths
- **Multiple output formats**: Supports all Docusaurus i18n structures
- **Comprehensive error handling**: Detailed error reporting and recovery

## Supported Languages

- 🇫🇷 **French** (source language in `/docs/`)
- 🇬🇧 **English** (`en`)
- 🇩🇪 **German** (`de`) 
- 🇪🇸 **Spanish** (`es`)
- 🇮🇹 **Italian** (`it`)

Translations are saved to `/i18n/<lang>/docusaurus-plugin-content-docs/current/`

## Legacy System (Archived)

The original Node.js translation script has been moved to `oldies/translate.js` and is no longer maintained. Use the Python system for all new translations.

## Troubleshooting

### Modern Python System
- **API Connection Issues**: Check `scripts/translate_py/.env` configuration
- **Permission Errors**: Ensure write access to `i18n/` directory  
- **Missing Dependencies**: Run `pip install -r scripts/translate_py/requirements.txt`
- **Performance Issues**: Adjust `CONCURRENT_TRANSLATIONS` in `.env`

### Getting Help
- **Detailed logs**: Use `--debug` flag for comprehensive information
- **Hash debugging**: Compare before/after hash values in debug output
- **API testing**: Use `--test-api` to verify connection
- **Documentation**: See `scripts/README.md` for complete reference
