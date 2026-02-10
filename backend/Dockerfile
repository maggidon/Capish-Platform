# 1) Build stage (compile TS -> dist)
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for better caching
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the production output
RUN npm run build


# 2) Runtime stage (smaller image just to run the app)
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Install only production deps
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built output from builder
COPY --from=builder /app/dist ./dist

# If your app needs config.js at runtime, include it
COPY --from=builder /app/config.js ./config.js

# Start script uses dist/src/index.js in your setup
EXPOSE 3000
CMD ["npm", "start"]
