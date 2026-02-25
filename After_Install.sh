#!/bin/bash
echo "Installing dependencies"

cd /var/www/admin
npm install
npm run build:dev
echo "Build completed on $(date)"


# Skip deleting node_modules to speed up subsequent deployments
# npm install will only update changed dependencies
