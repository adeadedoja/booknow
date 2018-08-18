FROM node:10
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install -g nodemon 
RUN npm install
EXPOSE $PORT
CMD [ "npm", "start" ]