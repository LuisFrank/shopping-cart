# ShoppingCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
#Example
https://preview.colorlib.com/#shopmax

#up server
json-server --watch db.json

#dockerizar
https://amoelcodigo.com/docker-angular-app/
https://www.angularfix.com/2022/04/docker-container-doesn-reload-angular.html

#Construir imagen
docker build -t shopping-cart .

#Correr contenedor
docker run -d -it -p 80:80 shopping-cart

#generar componente o servicio dentro de docker-compose
#docker-compose run front-shopping-cart ng g service services/cartlocalstorage 

#JWT implementado
https://www.freakyjolly.com/angular-json-web-token-authentication-tutorial-using-angular2-jwt/