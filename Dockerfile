FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

RUN yarn --network-timeout 100000

COPY . .

EXPOSE 3000

CMD yarn migration:run && yarn start 