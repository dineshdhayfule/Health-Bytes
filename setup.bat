@echo off
echo Starting HealthBites Setup...

echo.
echo 1. Installing Backend Dependencies...
cd Backend
call npm install
if %errorlevel% neq 0 (
    echo Failed to install backend dependencies
    pause
    exit /b 1
)

echo.
echo 2. Installing Frontend Dependencies...
cd ..\Frontend
call npm install
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo 3. Setting up environment variables...
cd ..
if not exist .env (
    copy .env.example .env
    echo Created .env file from template
    echo Please edit .env file with your actual configuration values
) else (
    echo .env file already exists
)

echo.
echo 4. Building Frontend...
cd Frontend
call npm run build
if %errorlevel% neq 0 (
    echo Frontend build failed
    pause
    exit /b 1
)

echo.
echo Setup completed successfully!
echo.
echo Next steps:
echo 1. Edit .env file with your actual configuration
echo 2. Make sure MongoDB is running
echo 3. Run 'docker-compose up' to start all services
echo    OR
echo    Run 'npm start' in Backend folder and 'npm run dev' in Frontend folder
echo.
pause
