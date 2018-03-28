FROM node:8.9.4-alpine

WORKDIR ./src/

COPY . .

RUN (apk add --update \
    bash && \
    rm -rf /var/cache/apk/* && \
    npm install)
    
CMD [ "npm", "start" ]