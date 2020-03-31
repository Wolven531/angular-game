FROM node:10.13-alpine

#ENV NODE_ENV production
ENV NODE_ENV development

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./angular.json", "./"]
COPY ["./src", "./src"]

#RUN npm install --production --silent && mv node_modules ../
RUN npm install

#COPY . .

EXPOSE 4200

CMD npm start
