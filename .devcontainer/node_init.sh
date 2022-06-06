#!/bin/bash


if [ -L "/workspace/development/app/gs_service" ]
then
     link=$(readlink /workspace/development/app/gs_service)
     if ! [ $link ==  "/workspace/development/gs_service"  ]
     then
       sudo  unlink /workspace/development/app/gs_service
       sudo ln -s /workspace/development/gs_service /workspace/development/app
     fi
elif [ -d "/workspace/development/app/gs_service" ]  
then
    sudo rm -rf /workspace/development/app/gs_service
    sudo ln -s /workspace/development/gs_service /workspace/development/app

else 
    sudo ln -s /workspace/development/gs_service /workspace/development/app
fi
