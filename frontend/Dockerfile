# Build stage
FROM node:18 as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Configura la URL de la API para producción
ENV VITE_API_URL=http://backend

RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage

# Copy built files
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]