FROM node:22-alpine

RUN npx create-docusaurus@latest /app classic --typescript && \
    chown -R node:node /app

USER node

WORKDIR /app

RUN cd /app && yarn install

RUN yarn add @docusaurus/faster docusaurus-plugin-search-local
COPY . .

CMD ["yarn", "start", "--host", "0.0.0.0"]
