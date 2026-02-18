#!/bin/bash

echo "Stopping admin"
pm2 stop admin || true
pm2 delete admin || true
