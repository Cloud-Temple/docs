# syntax=docker/dockerfile:1

# Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts AS base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0

ENV BASE_URL="/"

## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus


# Production build
FROM base AS prod
## Suppress non-critical SSG warnings (broken links, etc.)
ENV DOCUSAURUS_IGNORE_SSG_WARNINGS=true
## COPY dependencies
COPY package*.json yarn.lock ./
## Install dependencies with `--immutable` to ensure reproducibility.
RUN yarn install --immutable
## Copy over the source code.
COPY . /opt/docusaurus/
## Build the static site.
RUN yarn build


# Serve static site with a simple nginx
FROM nginx:stable-alpine AS deploy

# Upgrade all Alpine packages to pick up latest security patches (CVE fixes)
RUN apk upgrade --no-cache

# OCI image labels
LABEL org.opencontainers.image.title="Cloud Temple Documentation" \
      org.opencontainers.image.description="Cloud Temple official documentation site (Docusaurus static build served by nginx)" \
      org.opencontainers.image.vendor="Cloud Temple" \
      org.opencontainers.image.source="https://github.com/Cloud-Temple/docs" \
      org.opencontainers.image.licenses="proprietary"

ARG APP_FOLDER=/var/www

WORKDIR ${APP_FOLDER}

# Copy nginx configuration
ADD docker/production/root /

# Copy docusaurus static site
COPY --from=prod /opt/docusaurus/build ${APP_FOLDER}

CMD ["nginx", "-g", "daemon off;"]
