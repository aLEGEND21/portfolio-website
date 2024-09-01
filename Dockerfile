FROM node:18.19.0

# Copy over the files for installation
COPY package.json .
COPY package-lock.json .

# Install the packages
RUN npm install
RUN npm install -g serve

# Copy over the rest of the files
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 3001

# Set the environment to production
ENV NODE_ENV=production

# Run the app
CMD ["node", "build"]