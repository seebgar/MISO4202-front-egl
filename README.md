# [MISO4202-proyecto-frontend](https://miso4202-proyecto.now.sh)

<br/>

<strong>Requerimientos</strong>

* [NodeJS - Versión 12 o superior](https://nodejs.org/en/) 
* [NPM - Versión 6 o superior](https://www.npmjs.com/get-npm) 
* [Angular CLI](https://cli.angular.io)
  
  <br/>
  
> Para manejo de versiones NodeJS usar [NVM](https://github.com/nvm-sh/nvm)

> Esta aplicación utiliza <strong>[Nebular](https://akveo.github.io/nebular/)</strong> y <strong>[Bootstrap](https://getbootstrap.com).</strong>

<br/>




### Local Deployment

```ssh
$ git clone https://github.com/seebgar/MISO4202-proyecto-frontend.git front
$ cd front

$ npm install   # sólo la primera vez o cuando se agregen nuevas dependencias

$ npm run build
$ npm run start
``` 

<hr/>


### Development Deployment


```ssh
$ git clone https://github.com/seebgar/MISO4202-proyecto-frontend.git front
$ cd front

$ npm install   # sólo la primera vez o cuando se agregen nuevas dependencias

$ ng serve -o   # normalemnte corre en localhost:4200
``` 



<hr/>



### File directory

```ssh
.
├── package.json  # -> Management and dependencies, application deployment
├── .gitignore    # -> Specifies intentionally untracked files to ignore
│
│
├── src
│   ├── app    
│   |   └── public
│   |   |     ├── components
│   |   |     |   ├── inventario    #Componente
│   |   |     |   |     ├── html    # HTML Template
│   |   |     |   |     ├── scss    # SCSS Style
│   |   |     |   |     └── ts      # Typescript File
│   |   |     |   └── ...
│   |   |     ├── layout
│   |   |     ├── home
│   |   |     └── ...
│   |   └── service
│   |   |     ├── main.service.ts   # HTTP Service
│   |   |     └── ...
│   |   ├── app-routing.module.ts   # App Routing
│   |   ├── app-component.ts        # App Entry Point
│   |   └── app.module.ts           # App Components, Services Declaration
│   ├── assets
│   ├── environments
│   ├── index.html
│   ├── styles.scss
│   ├── theme.scss
│   └── ...
│   
└── ...



    
``` 

<hr/>




### Angular CLI


```ssh
$ npm install -g @angular/cli       # para instalar

# creación de un componente
$ ng generate component public/components/NombreComponente

# creación de un servicio
$ ng generate service service/NombreServicio

# creación de un pipe
$ng generate pipe pipes/NombrePipe

# Development Deployment
$ ng serve -o
``` 



