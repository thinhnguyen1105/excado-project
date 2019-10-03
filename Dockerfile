FROM node:8-slim

WORKDIR /server

COPY . /server
RUN yarn
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]