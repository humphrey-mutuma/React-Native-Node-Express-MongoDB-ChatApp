# FROM node:14
FROM node:lts-alpine

WORKDIR /usr/src/app

# install dependencies

COPY package*.json ./

RUN npm install

# Budle app source
COPY . .

# expoe a port
EXPOSE 5000

# build our app to create a dist folder

RUN npm run build

CMD [ "node","dist/index.js" ]