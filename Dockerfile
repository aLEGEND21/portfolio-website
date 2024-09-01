FROM node:18.19.0

# Copy over the files for installation
COPY package.json .
COPY package-lock.json .

# Install the packages
RUN npm install

# Copy over the rest of the files
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 3001

# Load the environment variables from the .env file
RUN node -r dotenv/config build

# Set the production-specific environment variables
ENV NODE_ENV=production
ENV PORT=3001

# Run the app
CMD ["node", "build"]