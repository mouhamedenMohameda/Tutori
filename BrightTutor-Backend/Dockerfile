FROM node:20-alpine

WORKDIR /app

# Install dependencies for native modules
RUN apk add --no-cache python3 make g++ cairo-dev pango-dev jpeg-dev giflib-dev

# Copy package files
COPY package*.json ./
COPY build.js ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci

# Copy prisma schema and generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy source code
COPY . .

# Build TypeScript with esbuild
RUN npm run build

# Remove devDependencies after build
RUN npm prune --production

# Expose port
EXPOSE 3001

# Set environment variables
ENV NODE_ENV=production

# Start the server
CMD ["node", "dist/index.js"]
