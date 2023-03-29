# Define node version
FROM node:18-alpine AS base

# lAYER RESPONSIBLE TO INSTALL PROJECT'S DEPS
FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache libc6-compat
RUN yarn install --frozen-lockfile

# LAYER RESPONIBLE TO RUN COMMAND YARN BUILD
# COPY NODE_MODULES FOLDER CREATED ON DEPS LAYER
# PAST INTO BUILDER LAYER AND THE END RUN yarn build
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# LAYER RESPONSIBLE TO RUN PROJECT
# THEN COPY ALL FILES AND FOLDER REQUIRED TO START APP
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
