#!/bin/bash

echo "Stopping application"

pm2 stop admin || true
pm2 delete admin || true
