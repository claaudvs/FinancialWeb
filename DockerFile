FROM node:18.17.1-alpine

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
COPY ./node_modules ./node_modules
COPY .next/standalone ./standalone
COPY public /app/standalone/public
COPY .next/static /app/standalone/.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "./standalone/server.js"]