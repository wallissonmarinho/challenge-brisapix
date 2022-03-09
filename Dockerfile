FROM node:14.15.4-alpine3.12

RUN npm install -g @nestjs/cli@8.0.0

RUN chmod +x .docker/entrypoint.sh 

USER node

WORKDIR /home/node/app