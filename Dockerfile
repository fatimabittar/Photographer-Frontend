
FROM node:17-apline as builder

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start</pre>