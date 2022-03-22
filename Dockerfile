FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

RUN yarn --network-timeout 100000

COPY . .

EXPOSE 3001

CMD ["yarn","start"]