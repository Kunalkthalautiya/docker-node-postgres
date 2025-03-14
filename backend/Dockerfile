# Use official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json & package-lock.json first to install dependencies
COPY package.json package-lock.json ./

# Install dependencies using npm ci (faster & cleaner)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose the application's port
EXPOSE 3000

# Set environment variables (optional but recommended)
ENV DB_HOST=db
ENV DB_USER=myuser
ENV DB_PASSWORD=mypassword
ENV DB_NAME=mydatabase
ENV DB_PORT=5432

# Start the Node.js application
CMD ["node", "index.js"]
