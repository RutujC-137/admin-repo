#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Admin Deployment Script (runs on EC2 after CodeDeploy)
#
# CodeBuild already ran:  npm run build:dev (or qa / preprod / prod)
# The build/ folder is already baked with the correct API URL.
# This script just serves it with PM2 on port 3001.
# ─────────────────────────────────────────────────────────────

set -e

cd /var/www/admin

echo "Serving pre-built admin panel with PM2 on port 3001..."
pm2 restart admin || pm2 serve build 3001 --name admin --spa

echo "Saving PM2 process list..."
pm2 save

echo "Admin deployment complete."
