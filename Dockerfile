FROM node:12-buster-slim as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run-script build

FROM nginx:1.18.0

COPY nginx/conf.d /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/app/dist .

ENV BACKEND_ADDR 10.10.20.12
ENV BACKEND_PORT 8081

CMD /bin/sh -c "envsubst '\$BACKEND_ADDR,\$BACKEND_PORT' < /etc/nginx/conf.d/default.conf.tmpl > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

EXPOSE 80

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
