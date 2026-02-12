# Admin Panel (React)

## Port: 3001

## How to Run Locally

```bash
npm install
npm start
```

## Features

- Admin login interface
- Connects to backend API for authentication
- Test credentials provided

## Test Credentials

- **Username:** admin
- **Password:** admin123

## Important Note

Make sure backend is running on port 4000 before starting admin panel.

## Deployment Files

- `appspec.yml` - For AWS CodeDeploy
- `buildspec.yml` - For AWS CodeBuild
- `scripts/install.sh` - Post-deployment script

## EC2 Deployment Path
`/var/www/admin`

## Build Command
`npm run build` - Creates optimized production build
