#!/bin/bash
echo "Installing dependencies"

cd /var/www/admin

# Remove old modules and build to ensure a clean slate
rm -rf node_modules build

echo "Installing dependencies"
npm install

echo "Building application"
npm run build:dev