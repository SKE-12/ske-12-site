# Initialize builder container
FROM node:carbon as builder
WORKDIR /usr/src/app

# Copy Package.json
COPY package*.json ./
# Install Dependencies
RUN ["npm", "install"]
# Copy project
COPY . .
# Build
RUN ["npm", "run", "build"]

# Initialize serving container
FROM nginx:1.15.4-alpine
WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/app/public .


