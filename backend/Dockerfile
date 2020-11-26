FROM node:15-alpine

RUN apk update && apk add yarn

RUN adduser -g 1100 -u 1100 -D backend
USER 1100
WORKDIR /app

ADD package.json yarn.lock ./
RUN yarn install

ADD src/ .

ENTRYPOINT [ "node", "/app/index.js" ]
