# -------------------------
# 1. Build stage
# -------------------------
FROM node:20 AS builder

LABEL org.opencontainers.image.source=https://github.com/fedal-nl/aklahlana-website

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# -------------------------
# 2. Production stage
# -------------------------
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]