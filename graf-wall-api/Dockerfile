
FROM node:latest


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 3000


ADD https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh


CMD /usr/wait-for-it.sh db:3307 -- npm run start:dev
