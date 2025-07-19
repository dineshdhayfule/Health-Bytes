@echo off
echo 🚀 HealthBites Vercel Deployment Script
echo =======================================

:: Check if Vercel CLI is installed
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI not found. Installing...
    npm install -g vercel
)

echo ✅ Vercel CLI is ready

:: Check if this is the first deployment
if not exist ".vercel\project.json" (
    echo 🔧 First time deployment - Setting up project...
    
    set /p PROJECT_NAME="Project name (default: healthbites): "
    if "%PROJECT_NAME%"=="" set PROJECT_NAME=healthbites
    
    echo 🔍 Initializing Vercel project...
    vercel --name="%PROJECT_NAME%"
) else (
    echo 🔄 Deploying updates...
    vercel --prod
)

echo.
echo ✅ Deployment complete!
echo.
echo 📋 Next steps:
echo 1. Set up environment variables in Vercel dashboard:
echo    - GEMINI_API_KEY
echo    - JWT_SECRET
echo    - Mongo_url
echo    - VITE_BACKEND_URL
echo    - VITE_AUTH0_DOMAIN
echo    - VITE_AUTH0_CLIENT_ID
echo.
echo 2. Configure Auth0 with your Vercel domain
echo 3. Set up MongoDB Atlas and update connection string
echo.
echo 📖 For detailed instructions, see VERCEL-DEPLOYMENT.md
pause
