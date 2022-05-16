FROM node:16.10 as builder

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci
RUN mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run build

### STAGE 2: Setup ###

FROM nginx:1.21.3-alpine

## Copy our nginx configs
COPY nginx/default.conf /etc/nginx/conf.d/

## Expose required ports
EXPOSE 80/tcp

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
WORKDIR /usr/share/nginx/html


COPY --from=builder /ng-app/dist/weather-ui /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
