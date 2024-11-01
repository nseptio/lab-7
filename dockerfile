# Stage 1 - Build the app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
# Install all dependencies including dev dependencies
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Serve the app
FROM node:18
WORKDIR /app
COPY --from=build /app /app
EXPOSE 80
EXPOSE 5000
CMD ["npm", "start"]
