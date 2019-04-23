FROM node:11.4.0-alpine

# Environment variable
ENV ENV_SILENT true

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "run", "start"]
EXPOSE 8080