# inventory-app/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .   # copy the app code
EXPOSE 8080
CMD ["node", "server.js"]