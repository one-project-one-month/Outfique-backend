
# Base Image
FROM node:22-alpine as base

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile


# development image
FROM base as dev

COPY . .

RUN pnpm db:generate

EXPOSE 8000

CMD ["pnpm","dev"]

# Build Image

FROM base as build

COPY . .

RUN pnpm db:generate

RUN pnpm build

# Production image

FROM node:22-alpine as prod

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --prod

COPY --from=build /app/dist ./dist
COPY --from=build /app/src/generated/prisma ./src/generated/prisma

EXPOSE 8000

CMD ["node", "dist/server.js"]



