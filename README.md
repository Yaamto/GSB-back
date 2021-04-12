# GSB-back


DOCKER-------------------------------------------------------------------------

docker network create gsb

docker run -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=root --name mysql --network gsb mysql 

docker run -p 80:8080 -d -e PMA_HOST=mysql  --name phpmyadmin --network gsb phpmyadmin

DOCKER--------------------------------------------------------------------------

