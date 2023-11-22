# Use a Node.js base image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port that your application will run on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
