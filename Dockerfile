FROM crazyyoshi/lemp5-alpine:latest
COPY screenpics.sql /usr/src/sqldump/
COPY nginx.conf /etc/nginx/nginx.conf
COPY projects /usr/share/nginx/html/

EXPOSE 80 81 82
