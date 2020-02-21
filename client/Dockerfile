
FROM node:lts-alpine
MAINTAINER nobas

WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm i -g @quasar/cli && npm install pm2 -g && quasar build -m ssr

#EXPOSE 2020

#CMD ["node", "./dist/ssr/index.js"]


#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /client/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]