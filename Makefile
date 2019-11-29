up-api:
	docker-compose -f docker/api-compose.yml up -d

up-app:
	docker-compose -f docker/app-compose.yml up -d

up-storage:
	docker-compose -f docker/storage-compose.yml up -d

down-api:
	docker-compose -f docker/api-compose.yml down

down-app:
	docker-compose -f docker/app-compose.yml down

down-storage:
	docker-compose -f docker/storage-compose.yml down

network:
	docker network create docker-workshop-network

seed:
	docker exec -it docker-workshop-storage /bin/bash -c "mysql --user=root --password=root workshop < /usr/src/database/seed.sql"

all: up-storage up-api up-app

clean: down-app down-api down-storage