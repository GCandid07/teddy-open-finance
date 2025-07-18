FROM node:24.3-alpine

WORKDIR /app

COPY ./teddy-shell/package*.json ./

RUN npm install

COPY ./teddy-shell ./

RUN npm run build

EXPOSE 5000

CMD ["npx", "vite", "preview", "--host", "--port", "5000"]
