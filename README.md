# Blog personal - Cookie Run Kingdom

[Pagina en vivo aqui](http://62.138.24.147/proyecto/21231/)

Descripción
---
Este proyecto se trató de la creación de un Blog, tanto el backendo como el frontend. El blog tiene temática del juego de Cookie Run Kingdom y es un diario personal de mi progreso en el juego. 

### Informacion del blog
El blog cuenta con 3 tablas en las que se guarda la información, establecidas en [schema.sql](https://github.com/eunicean/BlogCRK/blob/main/blogProjectCrk/schema.sql)

Tecnologias usadas
---
### Backend
 - Docker
 - Express
 - MySQL
 - Javascript
 - JSON
 - NodeJS

### Frontend
 - Vite
 - React
 - Javascript
 - Html
 - CSS

Como usar el blog de forma personal
---
Este blog tambien puede ser usado por cualquier persona que quiera usarlo. Antes de clonar el proyecto es necesario que se tenga instalado y configurado en su dispositivo lo siguiente:
 - Git bash o Github Desktop
 - Docker
 - NodeJS v21

Despues de haber configurado las tecnologias anteriores, hay que clonar los siguientes repositorios
 - [Backend - Lab6WEB (https://github.com/eunicean/lab6WEB.git)](https://github.com/eunicean/lab6WEB.git)
 - [Frontend - BlogCRK (Este repo: https://github.com/eunicean/BlogCRK.git) ](https://github.com/eunicean/BlogCRK.git)

Al tener los dos repositorios, dirigirse al repositorio del backend y correr el siguiente comando:

```
npm install
```

En el repositorio de frontend es necesario entre a la carpeta blogProjectCrk y que se instale, por medio de la consola en esa carpeta, con el comando npm install lo siguiente

```
npm install vite
```

```
npm install crypto-js
```
Para correr la vista debe correr el siguiente comando en la misma carpeta blogProjectCrk:
```
npm run dev
```

Esto te llevará a la página del blog en tu navegador en la siguiente dirección [http://localhost:5173/](http://localhost:5173/)