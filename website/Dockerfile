FROM node:20.2.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm build

# Copy the rest of the app source code
COPY . .

# Expose the app's port (modify if necessary)
EXPOSE 4174

# Start the app
CMD ["npm", "run",  "preview"]