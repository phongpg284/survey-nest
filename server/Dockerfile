FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN yarn
RUN npx mikro-orm schema:create --dump
CMD [ "yarn", "start:dev" ] 