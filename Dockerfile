# Vue frontend
FROM node:18 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Nodejs backend
FROM node:18-slim

WORKDIR /app

COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/server.cjs ./
COPY --from=build-stage /app/package*.json ./
COPY --from=build-stage /app/vite.config.js ./

RUN npm ci --only=production

ENV PORT=8080
ENV APP_PORT=8000

EXPOSE 8080
EXPOSE 8000

CMD [ "node", "server.cjs" ]
