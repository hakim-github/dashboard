FROM node:17-alpine3.14 AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --production
COPY . ./
RUN yarn build

FROM nginx:1.21.6-alpine AS server
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html