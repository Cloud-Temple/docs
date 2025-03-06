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
## COPY dependencies
COPY package*.json package-lock.json ./
## Install dependencies with `--immutable` to ensure reproducibility.
RUN yarn install --immutable
## Copy over the source code.
COPY . /opt/docusaurus/
## Build the static site.
RUN yarn build


# Serve static site with a simple nginx
FROM nginx:1.27.4-alpine AS deploy

ARG APP_FOLDER=/var/www

WORKDIR ${APP_FOLDER}

# Copy nginx configuration
ADD docker/production/root /

# Copy docusaurus static site
COPY --from=prod /opt/docusaurus/build ${APP_FOLDER}

CMD ["nginx", "-g", "daemon off;"]
