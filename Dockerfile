FROM node:alpine
WORKDIR /paas-client
COPY package-lock.json /paas-client/
COPY package.json /paas-client/
COPY src /paas-client/src
COPY public /paas-client/public
RUN npm i 
EXPOSE 3000
CMD ["npm", "run", "start"]