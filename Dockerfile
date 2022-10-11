# syntax=docker/dockerfile:1
FROM node:16.9.0
RUN npm start
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "dist/main.js"]