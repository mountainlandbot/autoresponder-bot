FROM node:16-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN yarn install

COPY bot.js /app/bot.js

ENV HOMESERVER_URL=
ENV ACCESS_TOKEN=
ENV USER_ID=

CMD node bot.js
