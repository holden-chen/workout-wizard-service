FROM node:16

WORKDIR /service

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]ß