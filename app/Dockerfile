FROM node:15-alpine as builder

RUN apk update && apk add yarn

WORKDIR /app

ADD package.json yarn.lock ./
RUN yarn install

COPY src ./src/
COPY public ./public/
RUN yarn build

FROM nginx
COPY --from=builder /app/build/ /usr/share/nginx/html
EXPOSE 80
