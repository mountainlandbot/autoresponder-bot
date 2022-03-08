FROM node:16-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN yarn install

COPY bot.js /app/bot.js
RUN mkdir /app/data

ENV HOMESERVER_URL=
ENV ACCESS_TOKEN=
ENV USER_ID=
ENV BOT_JSON_PATH=/app/data/bot.json

CMD node bot.js
