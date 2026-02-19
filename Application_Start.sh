#!/bin/bash

echo "Starting application"

cd /var/www/admin

# IMPORTANT: The admin panel is served as static files by Nginx.
# Running 'pm2 start npm -- start' is for DEVELOPMENT (dev server).
# It uses too much RAM and causes port conflicts.
# Nginx handles everything via the /var/www/admin/build folder.

# pm2 delete admin 2>/dev/null || true
# pm2 save

echo "Admin static files are ready for Nginx."
