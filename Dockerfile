FROM node:16-alpine

WORKDIR /app

# CMD npm run dev
CMD npm ci && npm run dev
