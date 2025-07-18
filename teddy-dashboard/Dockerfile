FROM node:24.3-alpine

WORKDIR /app

COPY ./teddy-dashboard/package*.json ./

RUN npm install

COPY ./teddy-dashboard ./

RUN npm run build

EXPOSE 5000

CMD ["npx", "vite", "preview", "--host", "--port", "5000"]
