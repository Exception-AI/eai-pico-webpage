# Use an official Node.js image as the base
FROM node:23.10-slim

# Set working directory inside the container
WORKDIR /app

# Install rsync (required for your build process)
RUN apt-get update && apt-get install -y rsync libatomic1

# Copy the package.json and package-lock.json (if available) to the container
COPY package.json package-lock.json* ./

# Install the dependencies
#RUN npm install --frozen-lockfile

# Copy the rest of the application files into the container
COPY . /app/

# Install necessary dependencies globally (e.g., yarn, sass, postcss)
#RUN yarn

# Expose the port that the app will run on
EXPOSE 8788

# Build the app
RUN yarn

# Start the application using your 'start' script (or dev script for development)
CMD ["yarn", "dev"]

