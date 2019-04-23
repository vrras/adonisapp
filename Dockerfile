FROM node:alpine

# Environment variable
ENV ENV_SILENT true

# Create app directory
WORKDIR /app

# Copy all files
COPY . /app/

# Install dependency
RUN npm install --production

CMD ["npm", "run", "start"]
