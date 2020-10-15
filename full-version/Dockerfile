FROM node:12-buster-slim as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run-script build

FROM nginx:1.18.0

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/app/dist .

EXPOSE 80

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
  