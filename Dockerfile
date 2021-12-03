FROM node:16.13-alpine3.12 AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

FROM node:16.13-alpine3.12 AS builder
ENV NODE_ENV production
WORKDIR /app
COPY env/.env.example .env
COPY . .
RUN npm install
RUN npm run test
RUN npm run build

FROM nginx:1.21.4 as production
ENV NODE_ENV production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
