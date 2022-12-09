FROM node:10.10.0-alpine
WORKDIR /home/root
COPY . .
RUN npm install
<<<<<<< HEAD
RUN npm build
=======
#RUN npm run build
>>>>>>> b73585a9872a45ca1170c8685f84a7fa66c32a3a
EXPOSE 3000
CMD ["npm","start"]
