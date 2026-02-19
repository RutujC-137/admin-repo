#!/bin/bash
echo "Preparing admin deployment"

cd /var/www/admin

# We DO NOT run npm install or npm build here. 
# It causes ScriptTimedOut (5 mins limit).
# Static files should be in /var/www/admin/build from CodeBuild.
echo "Deployment preparation complete."