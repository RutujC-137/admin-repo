# Admin Panel (React)

## Port: 3001

## 🔐 Environment Variables Setup

### Local Development

1. Copy the example file:
```bash
cp .env.example .env.development
```

2. Edit `.env.development`:
```bash
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_ENV=development
```

3. Install and run:
```bash
npm install
npm start
```

**Important:** Start backend first on port 4000!

### Production (AWS)

Add these as environment variables in AWS CodeBuild:
- `REACT_APP_API_URL` = `http://54.84.37.142/api`
- `REACT_APP_ENV` = `production`

See `../AWS_CODEBUILD_ENV_SETUP.md` for detailed instructions.

---

## Features

- Admin login interface
- Connects to backend API for authentication
- Shows current environment info
- Modern, responsive UI

## Test Credentials

- **Username:** `admin`
- **Password:** `admin123`

---

## Files Explained

- `src/App.js` - Main admin component with login form
- `src/index.js` - React entry point
- `public/index.html` - HTML template
- `package.json` - Dependencies
- `appspec.yml` - AWS CodeDeploy configuration
- `buildspec.yml` - AWS CodeBuild configuration (creates .env.production)
- `scripts/install.sh` - Deployment script
- `.env.example` - Template for environment variables
- `.env.development` - Local development config (not committed)
- `.env.production` - Production config (not committed)
- `.gitignore` - Prevents committing .env files

---

## EC2 Deployment Path

`/var/www/admin`

---

## Deployment Flow

1. Push to GitHub
2. CodePipeline triggers
3. CodeBuild creates `.env.production` from environment variables
4. CodeBuild runs `npm run build` (includes env vars in build)
5. CodeDeploy copies build folder to `/var/www/admin`
6. `install.sh` runs `pm2 serve build 3001`
7. Admin panel is live!

---

## Troubleshooting

**Login not working:**
```bash
# Check if backend is running
curl http://localhost:4000/api/health

# Check browser console for errors
# Verify REACT_APP_API_URL is correct
```

**"Failed to connect to backend":**
```bash
# Check backend logs
pm2 logs backend

# Verify CORS_ORIGIN in backend includes your domain
# Check if port 4000 is accessible
```

**Environment variable not showing:**
```bash
# Variable must start with REACT_APP_
# Restart dev server after adding variables
# In production, rebuild the project
```
