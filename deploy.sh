#!/bin/bash

EXISTE=0
RED='\033[0;31m'    # Red
GREEN='\033[0;32m'  # Green
ENDCOLOR="\033[0m"  # No Color
YELLOW='\033[0;33m' # Yellow
TIPODEPLOY='DEV'
DIRPROD=
SAVEDDIRPROD=

#################################### Funciones ####################################

function questioToContinue() {
    printf "\n"
    echo "Siguiente paso a realizar - " $1
    read -n 1 -p "Presione A para continuar ó cualquier otra tecla para salir: " response
    printf "\n"
    response=$(echo "$response" | tr '[:lower:]' '[:upper:]') # toupper
    if ! [[ $response =~ ^(A|a| ) ]]; then
        echo -e "${RED}Cancelando el deploy.${ENDCOLOR}"
        printf "\n"
        exit 0
    fi
}

function paginaWebProd_CD() {
    cd $1
}

function checkPathOfFile() {
    if [ ${TIPODEPLOY} = 'PROD' ]; then
        #chequeo que no sea vacio el path
        if [ -z $DIRPROD ]; then
            printf "\n"
            echo -e "${RED}Debe especificar el directorio en donde estará el proyecto para producción. Ej: /home/proyectoprod.${ENDCOLOR}"
            echo -e "Ejecute ${GREEN}./deploy.sh -h${ENDCOLOR}, para ver los parametros permitidos."
            printf "\n"
            exit 1
        fi
        #chequeo que sea un path que exista y lo creo, en caso de error no sigo con el script
        if [ ! -d "$DIRPROD" ]; then
            # si no existe lo creamos
            mkdir $DIRPROD >/dev/null
            if [ $? -ne 0 ]; then
                printf "\n"
                echo -e "${RED}Ocurrio un error al crear el directorio especificado, path no válido.${ENDCOLOR}"
                echo -e "Ejecute ${GREEN}./deploy.sh -h${ENDCOLOR}, para ver los parametros permitidos."
                printf "\n"
                exit 1
            fi
        fi
    fi
}

function validateParams() {
    if [ $# == 0 ]; then
        printf "\n"
        echo -e "${RED}Deploy: ¡Error! No se le a pasado ningún parámetro.${ENDCOLOR}"
        echo -e "Ejecute ${GREEN}./deploy.sh -h${ENDCOLOR}, para ver los parametros permitidos."
        printf "\n"
        exit -1
    fi
    while [ $# -gt 0 ]; do
        case "$1" in
        -h | help)
            printf "\n"
            printf "\n"
            echo "deploy.sh - permite hacer un deploy de esta aplicación, como desarrollo ó como producción"
            echo " "
            echo "deploy.sh [options] "
            echo " "
            echo "options:"
            echo "        -h, -help                muestra la ayuda"
            echo "        -t, -tipo                 especifica que tipo de deploy se quiere hacer, DEV: para Desarrollo ó PROD: para Producción"
            echo "        -o, -output-dir           en caso de que el tipo de deploy sea PROD, se debe especificar el directorio en donde se realizará el deploy. Por Ej: /home/proyectoweb, en caso que el directorio no exista, este comando lo crea"
            printf "\n"
            exit 0
            ;;
        -t | tipo)
            shift
            if [ $# -gt 0 ]; then
                TIPODEPLOY="$1"
            else
                printf "\n"
                echo -e "${RED}Debe especifica el tipo de deploy: DEV: para Desarrollo ó PROD: para Producción.${ENDCOLOR}"
                echo -e "Ejecute ${GREEN}./deploy.sh -h${ENDCOLOR}, para ver los parametros permitidos."
                printf "\n"
                exit 1
            fi
            shift
            ;;
        -o | output-dir)
            shift
            if [ $# -gt 0 ]; then
                DIRPROD="$1"
            else
                printf "\n"
                echo -e "${RED}Debe especificar el directorio en donde estará el proyecto para producción. Ej: /home/proyectoprod.${ENDCOLOR}"
                echo -e "Ejecute ${GREEN}./deploy.sh -h${ENDCOLOR}, para ver los parametros permitidos."
                printf "\n"
                exit 1
            fi
            shift
            ;;
        *)
            printf "\n"
            echo -e "${RED}Faltan ingresar parametros ó parametros incorrectos.${ENDCOLOR}"
            echo -e "Ejecute ${GREEN}./deploy.sh -h${ENDCOLOR}, para ver los parametros permitidos."
            printf "\n"
            exit 1
            ;;
        esac
    done

}

#################################### FIN de funciones ####################################

# validos los parametros del comando
validateParams $@
checkPathOfFile

fechaInicio=$(date +%H:%M:%S)
echo "Comenzando el proceso de deploy: $(date +%H:%M:%S)"
printf "\n"
printf "************** Paso 1 - GIT Status *************"
printf "\n"
resultado=$(git status | grep 'nada para hacer commit' | wc -l)
#printf "resultado---- $(git status | grep 'Cambios no rastreados para el commit' | wc -l)"
#printf "resu --- ${resultado}"
if [ $resultado -eq $EXISTE ]; then
    printf "\n"
    echo 'Hay cosas para subir al repositorio'
    echo -e "${RED}Cancelando el deploy.${ENDCOLOR}"
    printf "\n"
    exit 0
else
    printf "\n"
    echo -e "${GREEN}Paso 1 Finalizado.${ENDCOLOR}"
    printf "\n"
fi
questioToContinue "GIT PULL"
printf "\n"
printf "\n"
printf "************** Paso 2 - GIT Pull *************"
printf "\n"
git pull origin master
printf "\n"
echo -e "${GREEN}Paso 2 Finalizado.${ENDCOLOR}"
fechaInicioProcesoRUN=$(date +%H:%M:%S)
if [ ${TIPODEPLOY} = 'DEV' ]; then
    printf "\n"
    printf "\n"
    printf "************** Correr el Proyecto como DESARROLLO *************"
    printf "\n"
    questioToContinue "NPM INSTALL"
    printf "\n"
    printf "\n"
    printf "************** NPM Install *************"
    printf "\n"

    #hago un npm install, para que se actualizen las dependencias que necesida el proyecto
    npm install

    printf "\n"
    echo -e "${GREEN}Paso 3 Finalizado.${ENDCOLOR}"
    questioToContinue "RUN PROYECT"
    printf "\n"
    printf "\n"
    echo "Se ejecuta el proyecto en forma de DESARROLLO"
    printf "\n"

    # corro el proyecto como dev
    npm run dev

    fechaFINProcesoRUN=$(date +%H:%M:%S)
elif [ ${TIPODEPLOY} = 'PROD' ]; then
    printf "\n"
    printf "\n"
    printf "************** Correr el Proyecto para PRODUCCION *************"
    printf "\n"
    printf "\n"
    echo -e "${YELLOW}Paso 1 - Se hace el build.${ENDCOLOR}"
    printf "\n"

    #hago un npm install, para que se actualizen las dependencias que necesida el proyecto
    npm install

    #hago el build del proyecto en el directorio
    npm run build

    printf "\n"
    echo -e "${YELLOW}Paso 2 - Se copian los archivos necesarios en la carpeta de produccion '${DIRPROD}'.${ENDCOLOR}"
    printf "\n"

    # chequeo que exista el directorio antes de continuar
    checkPathOfFile

    #copio los archivo necesarios al nuevo directorio
    cp -R babel.config.js ecosystem.config.js jsconfig.json nuxt.config.js package.json .env ./nuxt-dist ./assets ./static $DIRPROD

    # cambio de directorio
    paginaWebProd_CD $DIRPROD

    printf "\n"
    echo -e "${YELLOW}Paso 3 - Se hace el npm install de las librerias.${ENDCOLOR}"
    printf "\n"

    #hago un npm install, para que se actualizen las dependencias que necesida el proyecto
    npm install

    printf "\n"
    echo -e "${YELLOW}Paso 4 - Se recargan las instancias del PM2.${ENDCOLOR}"
    printf "\n"

    #chequeo si hay instancias de pm2 'PaginaWebMunicipalidadTandil' corriendo
    #en caso que no haya, corro la aplicacion con el comando pm2 start
    #en caso de que haya alguna instacia, recargo las instancias con el comando pm2 reload all
    pm2 pid 'PaginaWebMunicipalidadTandil' >/dev/null
    RUNNING=$?
    if [ "${RUNNING}" = 0 ]; then
        pm2 start
        #echo  "no existe el proceso"
    else
        pm2 reload all
        #echo  "existe el proceso"
    fi

    fechaFINProcesoRUN=$(date +%H:%M:%S)
else
    printf "\n"
    echo -e "${RED}Tipo de deploy es incorrecto.${ENDCOLOR}"
    exit 1
fi
printf "\n"
printf "\n"
fechaFin=$(date +%H:%M:%S)
echo -e "${GREEN}******************* RESUMEN ********************${ENDCOLOR}"
printf "\n"
echo -e "${GREEN}Fecha Incio: ${fechaInicio}.${ENDCOLOR}"
echo -e "${GREEN}Fecha Finalización: ${fechaFin}.${ENDCOLOR}"
echo -e "${GREEN}Paso 1 - Git Status: Finalizado.${ENDCOLOR}"
echo -e "${GREEN}Paso 2 - Git PULL:   Finalizado.${ENDCOLOR}"
echo -e "${GREEN}Paso 3 - RUN:        Finalizado. (F.Inicio: ${fechaInicioProcesoRUN} - F.Final: ${fechaFINProcesoRUN})${ENDCOLOR}"

printf "\n"
echo -e "${GREEN}************************************************${ENDCOLOR}"
printf "\n"
