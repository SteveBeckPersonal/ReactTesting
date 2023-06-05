# Base image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 3000

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

# Convert line endings of the run script to Unix-style (LF)
RUN sed -i 's/\r$//' run && chmod +x run

# Install dependencies
RUN npm install


# Build app and start server from script
CMD ["/usr/src/app/run"]
