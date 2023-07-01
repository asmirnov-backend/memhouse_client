FROM node:16-alpine AS builder
RUN apk update && apk add --no-cache bash git
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV TZ=Europe/Moscow

COPY package*.json ./
RUN npm ci

ARG SERVER_BACKEND_URL
ENV SERVER_BACKEND_URL=SERVER_BACKEND_URL

COPY . .
RUN npm run build

FROM nginx:mainline-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

ENV NODE_ENV=production

ENTRYPOINT ["nginx", "-g", "daemon off;"]
