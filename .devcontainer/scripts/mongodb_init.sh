#!/bin/bash
echo "Setting keyfile permissions"
chmod 0600 /scripts/mongo-keyfile

echo "Starting mongo daemon"
/usr/bin/mongod --keyFile /scripts/mongo-keyfile --bind_ip_all --replSet gs_service