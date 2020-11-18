FROM crazyyoshi/lemp5-alpine:latest
LABEL \
    Author='Miloud Maamar' \    
    Maintener='development@maamar.fr' \
    Licence='Mozilla Public License Version 2.0' \
    Version='1.0' \
    Description='An image containing some student projects carried out during my MMI training.' \
    Usage='docker run -d -p [WWW_HOST_PORT1]:80 -p [WWW_HOST_PORT2]:81 -p [WWW_HOST_PORT3]:82'

COPY screenpics.sql /usr/src/sqldump/
RUN rm -f /etc/nginx/sites-enabled/*
COPY hosts /etc/nginx/sites-enabled
COPY projects /usr/share/nginx/html/

EXPOSE 80 81 82
