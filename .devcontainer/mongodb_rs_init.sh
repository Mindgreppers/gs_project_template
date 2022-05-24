#!/bin/bash
mongosh <<EOF
var config = {
    "_id": "gs_service",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongodb1:27017",
            "priority": 1
        },
        {
            "_id": 2,
            "host": "mongodb2:27017",
            "priority": 0
        },
        {
            "_id": 3,
            "host": "mongodb3:27017",
            "priority": 0
        }
    ]
};
rs.initiate(config, { force: true });
rs.status();
exit
EOF

sleep 10
mongosh <<EOF
   use admin;
   admin = db.getSiblingDB("admin");
   admin.createUser(
     {
	user: "admin",
        pwd: "mindgrep",
        roles: [ { role: "root", db: "admin" } ]
     });
     db.getSiblingDB("admin").auth("admin", "mindgrep");
     rs.status();
     exit
EOF