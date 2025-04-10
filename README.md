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

This documentation supports multiple languages. The primary content is written in French (in the `/docs/` directory) and automatically translated to other languages using the DragonflyGroup LLM API.

## Prerequisites

1. Install the required development dependencies:
```bash
npm install
```

2. Configure the translation API credentials in the `.env` file:
```
DRAGONFLY_API_URL=https://ai.dragonflygroup.fr/api/v1/chat/completions
DRAGONFLY_API_KEY=your_api_key
DOC_BASE_PATH=.
TRANSLATION_MODEL=chatgpt-4o-latest
TRANSLATION_TEMPERATURE=1
TRANSLATION_TOP_P=1
```

## Generating Translations

After adding or modifying French content in the `/docs/` directory, you can generate translations using the translation script:

```bash
# Translate all outdated files to all supported languages (en, de, es, it)
node scripts/translate.js

# Translate only to a specific language (e.g., English)
node scripts/translate.js --lang=en

# Perform a dry run (shows what would be translated without making changes)
node scripts/translate.js --dry-run

# Force retranslation of all files (ignores hash comparison)
node scripts/translate.js --force

# Initialize metadata for existing translations (first-time setup)
node scripts/translate.js --init

# Initialize metadata and translate any missing files
node scripts/translate.js --init --translate-missing
```

### First-Time Setup

When you have existing translations that you want to preserve:

1. Run the script with the `--init` flag to create hashes for all existing files:
   ```bash
   node scripts/translate.js --init
   ```
   This will:
   - Create hashes for all French source files
   - Record these hashes in the metadata file for existing translations
   - Skip any missing translations

2. If you want to also translate any missing files during initialization:
   ```bash
   node scripts/translate.js --init --translate-missing
   ```
   This will initialize metadata for existing translations and translate any missing files.

After initialization, future runs of the script will only translate new or modified files.

## How It Works

The translation script:
1. Traverses all Markdown files in the `/docs/` directory
2. Computes a SHA-256 hash of each file's content
3. Compares the hash with stored values in `scripts/translation-meta.json`
4. Only translates files that are new or have changed since the last translation
5. Saves translated content to `/i18n/<lang>/docusaurus-plugin-content-docs/current/`
6. Updates the translation metadata file with the new hashes

Key features:
- Source file hashes are stored only in the metadata file, keeping translated files clean
- Non-Markdown files (like images, .docx files, etc.) are copied without translation
- Only .md files are processed for translation

## Troubleshooting

- **API Connection Issues**: Verify your API credentials in the `.env` file
- **Missing Translations**: Run with the `--force` flag to retranslate all files
- **Translation Quality**: Adjust the temperature and top_p parameters in `.env` for different results
