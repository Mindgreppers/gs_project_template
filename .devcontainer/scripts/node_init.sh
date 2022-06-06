#!/bin/bash

#cd /workspace/development/app
sudo npm install -g @mindgrep/godspeed
sudo chown -R node:node /workspace/development/gs_service

if [ -L "/workspace/development/app/gs_service" ]
then
     link=$(readlink /workspace/development/app/gs_service)
     if ! [ $link ==  "/workspace/development/gs_service"  ]
     then
       sudo unlink /workspace/development/app/gs_service
       ln -s /workspace/development/gs_service /workspace/development/app
     fi
elif [ -d "/workspace/development/app/gs_service" ]  
then
    sudo rm -rf /workspace/development/app/gs_service
    ln -s /workspace/development/gs_service /workspace/development/app

else 
    ln -s /workspace/development/gs_service /workspace/development/app
fi

sudo chown -R node:node /workspace/development/app/gs_service
