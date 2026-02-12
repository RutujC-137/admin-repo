#!/bin/bash
cd /var/www/admin
pm2 restart admin || pm2 serve build 3001 --name admin --spa
pm2 save
