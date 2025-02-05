FROM node:20

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Install and use a static server
RUN npm install -g serve

# Expose the port
EXPOSE 5173

# Serve the app using serve and enable fallback to index.html
CMD ["serve", "-s", "build", "-l", "5173", "--single"]
