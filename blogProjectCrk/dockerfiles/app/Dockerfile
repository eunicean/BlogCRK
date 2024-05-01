FROM node:21.6.2

WORKDIR /blogProjectCrk

COPY package*.json ./

RUN npm install

COPY ./src ./src

RUN npm install express mysql2 cors crypto-js dotenv 

CMD ["npm", "start"]