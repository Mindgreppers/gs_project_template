# GS_PROJECT_TEMPLATE

## Config
Define Datasources/Events/Functions in gs_project_template/src directory

## Setup
### Setup gs-service configure with mongodb and prisma
Clone the gs_project_template
```sh
git clone https://github.com/Mindgreppers/gs_project_template.git
cd gs_project_template
```
Clone the gs_service with in gs_project_template
```sh
https://github.com/Mindgreppers/gs_service.git
```
Choose the branch datastores
```sh
git checkout datastores
cd ..
```
### MongoDB install by docker in locally
```sh
docker pull mongo:4.0.4
docker run -d --name test-mongo mongo:4.0.4
```
Show all listed of running container and select the container, we are used
note: In my case , I am using mongodb container
```sh
docker exec -it fd91f992a731 bash
```
when you come in the container then used the command below for authentication and authorizaion
```sh
## mongo -u root -p root
```
check list all the available databases on MongoDB server
```sh
show dbs
```
You have create 'test' database in mongodb, type
```sh
use test;
```
Create your first document in MongoDB
```sh
db.user.insert({name: "kushal", age: 205})
```
MongoDB run which IP in the docker then used the below command:
```sh
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' test-mongo
```
In my case, output is:
```sh
172.17.0.2
```
Export the mongodb
```sh
export MONGO_TEST_URL=mongodb://172.17.0.2:27017/test
``
Prisma
```sh
npx prisma generate --schema=./src/datasources/test.prisma
```
```sh
npm run clean
npm run build
npm run dev
```
###  Going to the Postman and hit end point
```sh
http://localhost:3000/v1/prisma_test/user
```
Response is 200k
```sh
    "apiVersion": "1.0",
    "data": {
        "items": [
            [
                {
                    "id": "62877a224aadfbb386b8cc0d",
                    "age": 205,
                    "name": "Ada Lovelace"
                }
            ]
        ]
    }
}
```
