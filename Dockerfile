FROM node:14.17.0-stretch
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV production
ENV PORT 80

EXPOSE 80
CMD [ "npm", "start" ]
