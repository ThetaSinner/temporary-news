FROM node:15-alpine

RUN apk update && apk add yarn

RUN adduser -D backend
USER backend
WORKDIR /app

ADD package.json yarn.lock ./
RUN yarn install

ADD src/ .

ENTRYPOINT [ "node", "/app/index.js" ]
