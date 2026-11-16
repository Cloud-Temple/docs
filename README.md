# Cloud Temple Documentation

Welcome to the official documentation repository for Cloud Temple.
Here, you’ll find guides and resources to help you better understand and utilize Cloud Temple’s services and solutions.

The __PRODUCTION__ documentation is available at [docs.cloud-temple.com](https://docs.cloud-temple.com/home). It is published from a release tag on `main`.

The __STAGING__ documentation is available at [docs.c-t.tech](https://docs.c-t.tech/home). It is published automatically from the `staging` branch and may include changes not yet in production.

> Access to the staging documentation is restricted.

This project is continuously updated with new guides and improvements.

# Contributing

We value your contributions! Whether it’s improving an existing guide or creating a new one, your input helps us make this repository better.

## How to Contribute

 1. Fork this repository: Clone your fork to your local environment.
 2. Make your changes: Update or create guides.
 3. Submit a Pull Request (PR): Propose your changes to the `staging` branch.

Before contributing, read [AGENTS.md](AGENTS.md) (in French): it gathers the writing, translation and contribution rules. Detailed guides are in [`contributing/`](contributing/).

Our team will review your contribution, provide feedback if needed, and integrate approved changes.

## Guidelines for Contributions

 • Ensure your contributions are accurate, tested, and well-documented.
 • Include a brief explanation of your changes in the PR comments.
 • Follow the structure and style of existing guides for consistency.

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
docker-compose up
```

3. Access the documentation locally:

Open your browser and go to: <http://localhost:3000/docs/>

> Base url is set to "/docs" when running on non production build (locally or deployed on github pages)

🎉 Your local environment is ready!

# Working Locally without Docker

### Prerequisites

- __Node.js__ (version 22.19.0 or higher; CI uses Node 22)
- __Yarn__ 1.22.22 (via Corepack)

### Installation Steps

1. __Install dependencies__

   ```bash
   corepack yarn install --frozen-lockfile
   ```

2. __Start the development server__

   ```bash
   yarn start
   ```

   This command will start the Docusaurus development server with hot reloading enabled.

3. __Access the documentation locally__

   Open your browser and go to: <http://localhost:3000/docs/>

   > Base url is set to "/docs" when running on non production build (locally or deployed on github pages)

### Multi-language Development

The documentation supports 5 languages: __French (default)__, English, Spanish, Italian, and German.

#### Working with Multiple Languages

1. __Default Language (French)__
   - All content is written in French in the `/docs/` directory
   - This is the source language for all translations

2. __Start with a specific language__

   ```bash
   # Start in English
   yarn start --locale en

   # Start in Spanish
   yarn start --locale es

   # Start in Italian
   yarn start --locale it

   # Start in German
   yarn start --locale de
   ```

🎉 Your local environment is ready!

# Build and preview the static site

```bash
BASE_URL=/ SITE_URL=https://docs.cloud-temple.com yarn build
yarn serve --port 8080
```

The `build/` directory contains the static site for all five languages.

## Hosting domains

| Environment | Documentation URL | Access |
| --- | --- | --- |
| Staging | https://docs.c-t.tech/home | Restricted |
| Production | https://docs.cloud-temple.com/home | Public |

These are the supported documentation domains. CI builds use the corresponding
origin for canonical URLs and sitemaps, with `/` as the base path. Assets and
roadmap data use relative URLs on the same domain.

Domain routing, TLS certificates and access restrictions are managed by the
team responsible for Thor, separately from this repository. The static site
and its CI configuration do not enforce which hostnames Thor accepts.

## Search engine indexing

The production `robots.txt` allows crawling and declares the five language
sitemaps: `/sitemap.xml`, `/en/sitemap.xml`, `/de/sitemap.xml`, `/es/sitemap.xml`
and `/it/sitemap.xml`, all on `https://docs.cloud-temple.com`. The roadmap remains
`noindex, nofollow` in all five languages and is excluded from the sitemap.
Do not disallow the roadmap in `robots.txt`: crawlers need to read its
`noindex` directive.

The static file is shared by the site's environments. Host-specific rules for
staging and production belong to the team managing Thor and are not
configured in this repository. If the public `robots.txt` response differs
from the file in S3, changing this file alone will not remove that override.

## Staging and production releases

- A push to `staging` publishes the site to staging S3 and
  <https://docs.c-t.tech>.
- Promote reviewed changes through a pull request from `staging` to `main`.
  A push to `main` runs validation and builds the site without publishing it.
- Push a release tag such as `3.33.0` (or `v3.33.0`) on the chosen `main`
  commit to publish production. Creating a tag locally does not trigger CI.
  The workflow rejects a tag whose commit is not included in `main`.
- Production uses the GitHub environment `production` and its existing
  protection rules. Configure its `S3_BUCKET` variable and `S3_ACCESS_KEY_ID`
  / `S3_SECRET_ACCESS_KEY` secrets, plus the repository `S3_ENDPOINT` variable.
  Environment deployment rules must allow the release tags.

The workflow builds the tagged commit with the production URL, checks it,
then publishes the resulting artifact through the existing differential S3
publisher. Build jobs never receive S3 credentials. Releases share a publication
lock and an active publication is not cancelled by a new push.

Tags are immutable release references: do not move an existing tag. To roll
back content, revert the changes through a PR to `main` and publish a new tag.
The `version.json` file identifies the deployed commit and release tag.
The footer displays the exact tag in production (for example `3.33.0 · bd943aa`),
and the commit date, short SHA and `staging` label in staging.

Roadmap data remains maintained and published by its dedicated repository;
the site publisher preserves `roadmap-data/`. The roadmap data must be present
in each target bucket before the site is published.
Production Docker images are no longer built or pushed.

# Scripts for Automation

This project includes several scripts to automate documentation and translation tasks. For complete technical details on all scripts, please refer to the [__Scripts README__](./scripts/README.md).

## LLMaaS documentation maintenance

`docs/llmaas/models.md` is a selection guide. It links to the maintained catalogue instead of duplicating model counts, performance tables and lifecycle dates.

| Information | Maintained source |
|-------------|-------------------|
| Published lifecycle, LTS, retirement dates and migration targets | [LLMaaS lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) (`status/web/src/data/lifecycle.ts`) |
| Product announcements | [LLMaaS changelog](https://llmaas.status.cloud-temple.app/changelog) (`status/web/src/data/changelog.ts`) |
| Model descriptions and capabilities | LLMaaS repository: `scripts/models_information/models_config.yaml` |
| Identifiers exposed by the service | Authenticated `GET /v1/models` |
| Availability and observed performance | [LLMaaS status](https://llmaas.status.cloud-temple.app/) |

The published lifecycle is authoritative for lifecycle dates, LTS status and migration targets. If model inventories or historical copies disagree, reconcile their lifecycle fields with this source; do not copy conflicting dates into these docs. Technical capabilities must be checked against the effective service configuration and exposed API metadata.

For each model release, update the model metadata and published lifecycle in their owning repositories together. Check agreement on identifiers, support dates and migration targets before release. Update this documentation only when usage changes (API contract, capability, integration or migration procedure), then regenerate translations and build the site.

Keep example model IDs in configuration where practical; validate them against the API and lifecycle when changing a guide. Do not recreate exhaustive model lists in the overview, FAQ or concepts pages.

The former `memory-bank/models_config.yaml` historical copy has been removed from the repository. `yarn generate:models` / `yarn generate:docs` and the old Python entry point now exit with an explanatory error, without overwriting the selection guide.

## 🌍 Translation System

The documentation supports 5 languages: __French (source)__, English, German, Spanish, and Italian. The French content in `/docs/` is the source — translations are generated automatically via the **Cloud Temple LLMaaS API**, with SHA-256 change detection so only modified files are re-translated. The API token is passed via the `--token` CLI flag (recommended) or environment variables.

> ⚠️ **Never edit files in `i18n/` manually** — they are overwritten on each translation run. Always edit the French source in `/docs/`.

➡️ **Full setup (venv, install, token, usage, rules and troubleshooting):** see the [__Scripts Documentation__](./scripts/README.md).

> For a complete list of commands, advanced features, and troubleshooting, please see the detailed [__Scripts Documentation__](./scripts/README.md).
