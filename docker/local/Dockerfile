FROM node:lts-alpine

RUN npx create-docusaurus@3.10.0 /app classic --typescript && \
    chown -R node:node /app

USER node

WORKDIR /app

RUN cd /app && yarn install

RUN yarn add @docusaurus/faster docusaurus-plugin-search-local remark-math@6 rehype-katex@7 baseline-browser-mapping@latest
COPY . .

CMD ["yarn", "start", "--host", "0.0.0.0"]
# CMD ["sh", "-c", "yarn build && yarn serve --host 0.0.0.0 --port 3000"] # DevNote : Use this to test all translated versions
