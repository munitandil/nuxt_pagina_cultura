FROM node:11.13.0-alpine

LABEL Desarrollado por la Direción de Sistemas Informáticos - Municipalidad de Tandil

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

RUN npm install pm2 -g

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 3000 on container
EXPOSE 3000

# set app serving to permissive / assigned
#ENV NUXT_HOST=0.0.0.0
# set app port
#ENV NUXT_PORT=3000


# start the app
CMD [ "npm", "start" ]
#CMD [ "npm", "run", "startpm2" ]
#CMD [ "pm2", "start", "--no-daemon" ]