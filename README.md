# prac4-Futbol-Typescript

Pasos para arrancar el docker(se supone que docker ya esta instalado):

cd docker-compose-lamp
docker-compose up -d

Cuando esta todo instalado y funcionando se accede a la terminal con el siguente comando:
docker-compose exec webserver bash

Para crear y rellenar la bdd:
php loadData.php
