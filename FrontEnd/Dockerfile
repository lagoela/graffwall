
FROM node:latest


RUN apt-get update 


WORKDIR /app


COPY package*.json ./


RUN npm install


RUN npm install mysql2

RUN npm install -g @expo/ngrok@^4.1.0   



COPY . .



CMD ["sh", "-c", "CHOKIDAR_USEPOLLING=true npm start"]
