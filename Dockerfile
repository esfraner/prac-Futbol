FROM openjdk:8u201-jdk-alpine3.9

RUN apk update && apk add mysql-client && rm -f /var/cache/apk/*

ENTRYPOINT ["sh"]

CMD ["-c" , "tail -f /dev/null"]