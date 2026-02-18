#!/bin/bash

echo "Starting application"

cd /var/www/admin

pm2 start npm --name "admin" -- start --port 3001
pm2 save

