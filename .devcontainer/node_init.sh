#!/bin/bash


if [ -L "/workspace/development/app/gs_service" ]
then
     link=$(readlink /workspace/development/app/gs_service)
     if ! [ $link ==  "/workspace/development/gs_service"  ]
     then
        unlink /workspace/development/app/gs_service
        ln -s /workspace/development/gs_service /workspace/development/app
     fi    
fi

