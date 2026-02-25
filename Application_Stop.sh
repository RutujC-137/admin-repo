#!/bin/bash

echo "Stopping application"

pm2 stop admin || true

