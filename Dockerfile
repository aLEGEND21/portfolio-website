FROM node:18.19.0

# Copy over the files for installation
COPY package.json .
COPY package-lock.json .

# Install the packages
RUN npm install

# Copy over the rest of the files
COPY . .

# TEMP
ENV WEBHOOK_URL=abc123

# Build the app
RUN npm run build

# Expose the port
EXPOSE 3001

# Set the production-specific environment variables
ENV NODE_ENV=production
ENV PORT=3001

# Run the app and use the dotenv package to load the environment variables
CMD ["node", "-r", "dotenv/config", "build"]