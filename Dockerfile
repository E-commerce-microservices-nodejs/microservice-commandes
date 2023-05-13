# Base Node.js image
FROM node:16.20-bullseye-slim

# Set environment variables for production
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install production dependencies only (for security)
RUN npm ci --only=production && \
    npm cache clean --force

# Copy the rest of the source code
COPY --chown=node:node . .

# Expose the port on which the application listens
EXPOSE 5000

# Use a non-root user for security reasons
USER node

# Start the application
CMD ["npm", "start"]

LABEL version="1.0" description="Orders microservice"
