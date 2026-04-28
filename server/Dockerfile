FROM node:18

WORKDIR /app

# package files copy
COPY package*.json ./

# install only production dependencies
RUN npm install --only=production

# copy full code
COPY . .

# port expose
EXPOSE 3000

# start server (IMPORTANT FIX)
CMD ["npm", "start"]