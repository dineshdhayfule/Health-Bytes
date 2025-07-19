# HealthBites - Deployment Files Overview

## 📁 Deployment Structure
```
HealthBites-main/
├── Frontend/
│   ├── Dockerfile              # Frontend containerization
│   └── nginx.conf              # Frontend Nginx configuration
├── Backend/
│   ├── Dockerfile              # Backend containerization
│   └── healthcheck.js          # Health monitoring script
├── nginx/
│   ├── nginx.conf              # Main Nginx configuration
│   └── conf.d/
│       └── default.conf        # Reverse proxy configuration
├── docker-compose.yml          # Multi-container orchestration
├── mongo-init.js              # Database initialization
├── .env.example               # Environment variables template
├── setup.bat                  # Windows setup script
├── setup.sh                   # Linux/Mac setup script
└── DEPLOYMENT.md              # Comprehensive deployment guide
```

## 🚀 Quick Deployment Commands

### Using Docker (Recommended)
```bash
# 1. Initial setup
./setup.sh  # or setup.bat on Windows

# 2. Configure environment
cp .env.example .env
# Edit .env with your actual values

# 3. Deploy all services
docker-compose up -d

# 4. Check status
docker-compose ps
```

### Manual Deployment
```bash
# Backend
cd Backend
npm install
npm start

# Frontend (new terminal)
cd Frontend
npm install
npm run dev
```

## 🔧 Configuration Required

### 1. Environment Variables (.env)
```env
GEMINI_API_KEY=your_actual_api_key
JWT_SECRET=your_secure_secret
Mongo_url=your_mongodb_connection
```

### 2. Auth0 Setup
Update `Frontend/src/App.tsx` with your Auth0 credentials.

## 📊 Service URLs
- **Frontend**: http://localhost:80
- **Backend**: http://localhost:3000
- **MongoDB**: localhost:27017
- **Proxy**: http://localhost:8080

## 🛠️ Features Included
- ✅ Docker containerization
- ✅ Nginx reverse proxy
- ✅ MongoDB with initialization
- ✅ Health checks and monitoring
- ✅ Security headers
- ✅ Gzip compression
- ✅ SSL-ready configuration
- ✅ Auto-restart policies

## 📖 Need Help?
Check `DEPLOYMENT.md` for detailed instructions and troubleshooting.
