# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder

# RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf


WORKDIR /app

# Copy package files first for better caching
COPY package.json yarn.lock* package-lock.json* ./

# Install dependencies (prefer yarn if available)
RUN npm install --frozen-lockfile

COPY . .

# Build the app
RUN npm run build

# Stage 2: Production-ready image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# # Environment variables (adjust as needed)
# ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]

