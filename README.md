# Pagina web Municipalidad de Tandil

# Template

    Nombre del template Anger
    Link: https://themeforest.net/item/anger-creative-business-portfolio-multipurpose-html5-template/23056463
    Este sitio se baso en el template de Construccion, y ha sido modificado por pomy

# Tecnologias utilizadas en este proyecto

    Se ha implementado con las siguientes tecnologias: vuejs, nuxtjs, vuex
    Tambien se debe controlar que la pc debe tener instalado los siguientes programas, nodejs, npm, git

# Configurar el proyecto

Se debe agregar en la raiz del proyecto un archivo llamado

```bash
.env
```

el mismo debe contener las siguientes lineas

```bash
# esto nos permite parametrizar la url de la api desde adentro de la muni
apiBaseUrl=http://enif.tandil.gov.ar:8080/ords/adminweb/api
```

-- agregado 13/05/2021 --

```bash
# esto nos permite especificar en que puerto va autilizar nuestra app, por defecto es 3000
serverPort=3000
```

```bash
# esto nos permite especificar que ip va autilizar nuestra app, por defecto es localhost
serverIp=localhost
```

-- agregado 24/05/2021 --

```bash
# se debe especificar la url de la pagina web
baseUrlPageWeb=https://www.tandil.gov.ar
```

```bash
# se debe especificar la url del panel administrador
urlPanelAdmin=http://enif.tandil.gov.ar:8080/ords/f?p=153:101
```

```bash
# se debe especificar la url del webmail
urlWebMail=https://svm.tandil.gov.ar/webmail-mt
```

# Flujo para actualizar nuestra app (para Desarrolladores)

## Descargar nuestra app a nuestra PC

Cada desarrollador del equipo debe tener un usuario en github, el administrador debe darle permiso para poder descargar y/o modificar en proyecto en github.
El flujo de trabajo para cada desarrollado debe ser el siguiente:

Primer paso

```bash
# descargar el proyecto en su pc
$ git clone https://github.com/munitandil/nuxtjs_paginaweb.git
```
Segundo paso

```bash
# debe instalar las dependencias que el proyecto requeire, este proceso pude tardar un rato
$ npm install
```

Tercer paso

    Abrir el proyecto con el editor de codigo que usa para modificar y/o agregar funcionalidad

Cuarto paso

```bash
# correr el proyecto en nuestra pc 
$ npm run dev 
```

## Subir los cambios a nuestra app en github

Una vez que hay realizado las mejoras y/o haya agregado nueva funcionalidad, debera subir los cambio el proyecto en github, esto requiere de varios pasos

    Nota: 
        Antes de terminar el dia laboral, subir los cambios, siempre que esten funcionando, esta explicacion es para subir a la rama master, lo ideal es subir los cambias a la rama dev (desarrollo) y luego el administrador debera hacer una fusion de ramas cuando lo crea necesario, pero por ahora no esta implementada todavia.

- Primer paso
```bash
#  revisar los cambio que se hicieron en nuestro proyecto local
$ git status
```
- Segundo paso

```bash
#  agregar los cambios a nuestro repositorio local
$ git add .
```

- Tercer paso

```bash
# agregar un comentario de que cambios se hicieron, reemplazar {comentario} por el comentario descriptivo de los cambios
$ git commit -m"{comentario}" 
```

- Cuarto paso

```bash
# verificar que no hayan quedados cambios sin hacer un commit, para esto repetivo el primer paso (debemos leer el mensaje que nos retorna)
$ git status
```

- Quinto paso

```bash
# verificamos en el proyecto de github, que no hayan cambios, o sea que otro desarrollado no haya subidos cambios antes que nosotros y que debemos tener en nuestro proyecto local
$ git pull
```

- Sexto paso
```bash
# cuando se haya unidos los cambios y/o reparados los conflictos, debemos subir nuestros cambios al repositorio de github
$ git push
```

    Nota:
        Cuando se ejecuten los comandos git pull ó git push, nos va a pedir el nombre de usuario y el password de nuestro usuario en github
# Para correr la app

```bash
# install dependencies
$ npm install
```

```bash
# serve with hot reload at localhost:3000
$ npm run dev
```

```bash
# build for production and launch server
$ npm run build
$ npm start
```

```bash
# generate static project
$ npm run generate
```

# Para correr los test de la app

Los test se escriben en la carpeta **test**

```bash
# run all test
$ npm run test
```

```bash
# run one test
$ npm run test -t <nombre del test>

```
# Para crear una imagen de docker

Los siguientes pasos son para crear una imagen de docker, para utilizar la app con un docker container y subirlo a produccion
(es un comienzo, despues se puede ir ajustando la configuracion para que quede mejor)

```bash
# run command, creamos la imagen del docker de nuestra app, este comando de debe ejecutar desde la carpeta del proyecto
$ docker build -t pagina_web_muni .
```

```bash
# run docker, con este comando corremos el docker de nuestra app, y en el navegador ponemos la url http://localhost:3000\
$ docker run -it -d -p 127.0.0.1:3000:3000 pagina_web_muni
```

# Para hacer deploy en el servidor

Esta aplicación esta configurada para utilizar el gestor de procesos PM2, dejo algunos links:

    - https://desarrolloweb.com/articulos/ejecutar-aplicacion-nodejs-pm2.html
    - https://pm2.keymetrics.io/docs/usage/application-declaration/#general
    - https://nuxtjs.org/faq/deployment-pm2

Se debe instalar en el servidor las siguientes app

    - Nodejs
    - npm (que se instala cuando se instala nodejs)
    - git

tambien se debe instalar

```bash
# npm pm2 install
$ npm install pm2 -g (app que permite correr tu aplicación como servicio)
```

Una vez instalados los programas que necesitamos, debemos clonar el proyecto desde nuestro git, con el siguiente comando

```bash
# hecer un git clone desde el github, en donde esta el proyecto
$ git clone https://github.com/munitandil/nuxtjs_paginaweb.git
```

luego corremos los siguientes comandos

```bash
# instalar las dependencia que se necesita para correr la app
$ npm install
```

luego corremos

```bash
# este comando compila nuestro proyecto
$ npm run build
```

ya estamos en condiciones de correr nuestra app, para esto corremos en comando

```bash
# este comando utiliza la configuracion que se especifico en el archivo ecosystem.config.js
$ pm2 start
```

Otros comandos de pm2, que nos sirven para monitorear nuestro proyecto:

```bash
$ pm2 monit

$ pm2 list

$ pm2 logs

$ pm2 stop all

$ pm2 reload all
```

# Deploy automatico

Se creo un archivo bash, deploy.sh, el cual permite hacer un deploy de la pagina, o sea correr la aplicación como desarrollo ó como producción, la idea es utilizar este comando para encapsular todos los pasos que se requieren para hacer el deploy de la aplicación.

## Parametros

Este archivo recibe parametos, para ver la lista de parametros ejecutamos el siguiente comando

```bash
#comando que muestra la ayuda para poder utilizarlo correctamente 
$ ./deploy.sh -h
```
Lista de parametros:

```bash
#como se utiliza el comando
$ ./deploy.sh [options]

[options]

    -h, -help          muestra la ayuda

    -t, -tipo           especifica que tipo de deploy se quiere hacer
                            - DEV: para Desarrollo  
                            - PROD: para Producción

    -o, -output-dir     en caso de que el tipo de deploy sea PROD, 
                        se debe especificar el directorio en donde se realizará el  
                        deploy. Por Ej: /home/proyectoweb, 
                        en caso que el directorio no exista, este comando lo crea

```
## Que hace el archivo

Este comando realiza los pasos necesarios para hacer un deploy de la aplización, como desarrollo ó como producción
Los pasos son los siguientes:

Primero paso

```bash
# Ejecuta este comando, si hay cambios en nuestro proyecto local sin subir a nuestro proyecto en github, cancela el deploy
$ git status
```

Segundo paso

```bash
# Actualiza nuestro proyecto local, con los cambios que haya en el proyecto remoto
$ git pull
```

Tercer paso 

En este paso según el tipo de deploy que se quiera realizar (DEV ó PORD), se hace lo siguiente

### Si el tipo de deploy es como DEV

```bash
# Instala todas las dependencias que necesita nuestro proyecto
$ npm install
```
y por último se corre la aplicación 

```bash
# Ejectuta la aplicacion en modo desarrollador
$ npm run dev
```

y el proyecto ya esta corriendo

### Si el tipo de deploy es como PROD

Para este tipo de deploy (PROD), se crea el directorio que se pasa como parametro, en caso de que no exista, y si no lo puede crear muestra un error y termina el comando.

```bash
# Se hace una compilación de la aplicacion, la cual se guarda en la carpeta /nuxt-dist
$ npm run build
```

Una vez que termine la compilación y este el directorio disponoble, se copian los siguientes archivos y carpetas, al directorio pasado por parametro:

    - babel.config.js 
    - ecosystem.config.js 
    - jsconfig.json 
    - nuxt.config.js 
    - package.json 
    - .env 
    - /nuxt-dist

Luego se cambia a dicho directorio y se ejecutan los siguientes comandos:

```bash
# Se actualizan las dependencias que necesida el proyecto
$ npm install
```

Luego se verifica si hay alguna instancia con el nombre 'PaginaWebMunicipalidadTandil' corriendo en pm2, en caso de que exista, se ejecuta el siguiente comando

```bash
# reinicia todas las instancias con el nombre 'PaginaWebMunicipalidadTandil' corriendo en pm2
$ pm2 reload all
```

en caso de que no existan instancias corriendo con el nombre 'PaginaWebMunicipalidadTandil' corriendo en pm2, se ejecuta el sigueinte comando

```bash
# inicia la aplicacion con pm2
$ pm2 start
```

y nuestro proyecto ya esta corriendo y podemos utilizar los camando de pm2 para hecer un seguimiento del mismo

# Desarrolado por

Este sitio web, ha sido desarrollado por la Dirección de Sistemas Informáticos (DSI) de la Municipalidad de Tandil.
Con la participacion de Diego Rodriguez, de la empresa Qwavee (http://www.qwavee.com/) y Teresa 
