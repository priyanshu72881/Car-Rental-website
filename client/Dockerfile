# 🔹 Build Stage
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# build react app
RUN npm run build

# 🔹 Production Stage (Nginx)
FROM nginx:alpine

# copy build files
COPY --from=build /app/dist /usr/share/nginx/html

# expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]