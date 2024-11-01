# Stage 1 - build the app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2 - serve the app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
