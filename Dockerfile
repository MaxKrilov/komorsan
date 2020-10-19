# Работает для версии docker >= 17.05
# Для вр=ерсии ниже использовать Dockerfile_old
FROM golang:stretch as builder

# COPY . /go/src/web/komorsan

# COPY logrotate /go/src/web/komorsan/logrotate/
COPY vendor /go/src/web/komorsan/vendor/
COPY generate_graph_edges /go/src/web/komorsan/generate_graph_edges/
COPY load_firmware /go/src/web/komorsan/load_firmware/
COPY auto-migration /go/src/web/komorsan/auto-migration/
COPY .git /go/src/web/komorsan/.git/
COPY *.go *.yml *.a *.sh *.conf /go/src/web/komorsan/


RUN go build -i -v -o /go/src/web/komorsan/gge web/komorsan/generate_graph_edges 
RUN go build -i -v -o /go/src/web/komorsan/lofir web/komorsan/load_firmware

WORKDIR /go/src/web/komorsan

RUN ./build_release.sh

# RUN mkdir /opt/komorsan_web && \
# cp /go/src/web/komorsan/komorsan_web /opt/komorsan_web/ && \
# chmod +x /opt/komorsan_web/komorsan_web && \
# ln -s /opt/komorsan_web/komorsan_web /usr/local/bin/ && \
# cp /go/src/web/komorsan/gge /opt/komorsan_web/ && \
# chmod +x /opt/komorsan_web/gge && \
# ln -s /opt/komorsan_web/gge /usr/local/bin/ && \
# cp /go/src/web/komorsan/lofir /opt/komorsan_web/ && \
# chmod +x /opt/komorsan_web/lofir && \
# ln -s /opt/komorsan_web/lofir /usr/local/bin/
# RUN cp /go/src/web/komorsan/komorsan_web /opt/komorsan_web/
#RUN chmod +x /opt/komorsan_web/komorsan_web
FROM debian:stretch-slim

# ADD server.conf.yml /opt/komorsan_web/

# RUN chmod 0644 /opt/komorsan_web/server.conf.yml 
# RUN ln -s /opt/komorsan_web/komorsan_web /usr/local/bin/

# RUN set -x \
# 	&& apt-get update && apt-get install -y --no-install-recommends supervisor cron logrotate && \
# 	rm -rf /var/lib/apt/lists/*

# COPY --from=builder /go/src/web/komorsan/supervisord.conf /go/src/web/komorsan/logrotate/logrotate.conf /etc/
# ADD logrotate/logrotate.conf /etc/
# ADD supervisord.conf /etc/
# COPY --from=builder /go/src/web/komorsan/logrotate/backend.logrotate /etc/logrotate.d/
# ADD logrotate/backend.logrotate /etc/logrotate.d/
# COPY --from=builder /go/src/web/komorsan/logrotate/logrotate.cron /etc/crontab

# COPY logrotate/logrotate.cron /etc/crontab

# RUN chmod 0644 /etc/logrotate.conf && \
# 	chmod 0644 /etc/logrotate.d/backend.logrotate && \
# 	crontab /etc/crontab
# RUN chmod 0644 /etc/logrotate.d/backend.logrotate
# RUN crontab /etc/crontab
ENV KOMORSAN_WEB_LOGPATH="/var/log/komorsan_web"

RUN mkdir /opt/komorsan_web && mkdir /opt/komorsan_web/gge && mkdir /opt/komorsan_web/lofir

# Копируем приложения
COPY --from=builder /go/src/web/komorsan/komorsan_web /opt/komorsan_web/
COPY --from=builder /go/src/web/komorsan/server.conf.yml /opt/komorsan_web/
COPY --from=builder /go/src/web/komorsan/gge /opt/komorsan_web/gge/
COPY --from=builder /go/src/web/komorsan/lofir /opt/komorsan_web/lofir/
COPY --from=builder /go/src/web/komorsan/auto-migration/ /opt/komorsan_web/auto-migration/

RUN chmod +x /opt/komorsan_web/lofir/lofir && \
	ln -s /opt/komorsan_web/lofir/lofir /usr/local/bin/ && \
	chmod +x /opt/komorsan_web/gge/gge && \
	ln -s /opt/komorsan_web/gge/gge /usr/local/bin/ && \
	chmod +x /opt/komorsan_web/komorsan_web && \
	ln -s /opt/komorsan_web/komorsan_web /usr/local/bin/

WORKDIR /opt/komorsan_web

# RUN rm -rf /go 

#VOLUME /var/log/komorsan_web
VOLUME ${KOMORSAN_WEB_LOGPATH}

ENTRYPOINT ["komorsan_web"]
# ENTRYPOINT ["supervisord"]

EXPOSE 8080

