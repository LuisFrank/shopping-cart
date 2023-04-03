#primera etapa
FROM node:14.17.4-alpine3.14 as build-step  
# set working directory
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
#instalar angular solo modo desarrollo
RUN npm install -g @angular/cli@14.0.0

COPY . /app

#RUN npm run build --prod



#Segunda etapa modo produccion
#FROM nginx:1.17.1-alpine
	#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
#COPY --from=build-step /app/dist/shopping-cart /usr/share/nginx/html
