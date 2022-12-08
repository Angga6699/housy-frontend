FROM node:10.10.0-alpine
WORKDIR /home/root
COPY . .
RUN npm install
#RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
