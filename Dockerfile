# Step 1: Build the React app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the app source code
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the app with a lightweight web server (nginx)
FROM nginx:alpine

# Copy the build output to the Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
