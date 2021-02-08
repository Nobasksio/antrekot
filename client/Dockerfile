
FROM node:14

WORKDIR /app/

COPY . ./

WORKDIR ./client/

EXPOSE 8080

RUN npm install

CMD npx quasar dev
#&& npm install pm2 -g && quasar build -m ssr

#EXPOSE 2020

#CMD ["node", "./dist/ssr/index.js"]


#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /client/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
