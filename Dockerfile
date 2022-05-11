FROM node:16.15-alpine3.15

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

COPY ./dist .

RUN npm install --production

EXPOSE 3000

CMD ["node", "server.js"]
