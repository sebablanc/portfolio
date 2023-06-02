FROM node:18-alpine as build-step

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json /home/app/

RUN npm install

COPY . /home/app

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build-step /home/app/dist/portfolio-frontend /usr/share/nginx/html

EXPOSE 80