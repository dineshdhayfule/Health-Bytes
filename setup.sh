#!/bin/bash

echo "Starting HealthBites Setup..."

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for required tools
echo "Checking for required tools..."
if ! command_exists node; then
    echo "Error: Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

if ! command_exists npm; then
    echo "Error: npm is not installed. Please install npm."
    exit 1
fi

echo "✓ Node.js and npm are installed"

# Install Backend Dependencies
echo ""
echo "1. Installing Backend Dependencies..."
cd Backend
npm install
if [ $? -ne 0 ]; then
    echo "Failed to install backend dependencies"
    exit 1
fi

# Install Frontend Dependencies
echo ""
echo "2. Installing Frontend Dependencies..."
cd ../Frontend
npm install
if [ $? -ne 0 ]; then
    echo "Failed to install frontend dependencies"
    exit 1
fi

# Setup environment variables
echo ""
echo "3. Setting up environment variables..."
cd ..
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file from template"
    echo "Please edit .env file with your actual configuration values"
else
    echo ".env file already exists"
fi

# Build Frontend
echo ""
echo "4. Building Frontend..."
cd Frontend
npm run build
if [ $? -ne 0 ]; then
    echo "Frontend build failed"
    exit 1
fi

cd ..

echo ""
echo "Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your actual configuration"
echo "2. Make sure MongoDB is running"
echo "3. Run 'docker-compose up' to start all services"
echo "   OR"
echo "   Run 'npm start' in Backend folder and 'npm run dev' in Frontend folder"
echo ""
