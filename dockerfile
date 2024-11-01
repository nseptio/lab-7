# Stage 1 - Build the app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Serve the app with Vite's preview mode
FROM node:18
WORKDIR /app
COPY --from=build /app /app
EXPOSE 80
CMD ["npm", "run", "preview", "--", "--port", "80"]
