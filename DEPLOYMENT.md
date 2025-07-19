# HealthBites Deployment Guide

## Overview
HealthBites is a full-stack health and nutrition tracking application built with React (Frontend) and Node.js (Backend), using MongoDB for data storage and Google Gemini AI for food recognition.

## Prerequisites

### Required Software
- **Node.js** 18 or higher
- **npm** (comes with Node.js)
- **Docker** and **Docker Compose** (for containerized deployment)
- **MongoDB** (if running locally without Docker)

### Required API Keys
- **Google Gemini AI API Key**: Get from [Google AI Studio](https://makersuite.google.com/app/apikey)
- **Auth0 Account**: Set up at [Auth0](https://auth0.com/)

## Deployment Options

### Option 1: Docker Deployment (Recommended)

#### Quick Start
1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd HealthBites-main
   ```

2. **Run Setup Script**
   ```bash
   # On Windows
   setup.bat
   
   # On Linux/Mac
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Configure Environment**
   - Edit `.env` file with your actual values:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key
   JWT_SECRET=your_super_secure_jwt_secret
   ```

4. **Start All Services**
   ```bash
   docker-compose up -d
   ```

#### Services and Ports
- **Frontend**: http://localhost:80
- **Backend API**: http://localhost:3000
- **MongoDB**: localhost:27017
- **Nginx Proxy**: http://localhost:8080 (optional)

### Option 2: Local Development

#### Backend Setup
1. **Navigate to Backend**
   ```bash
   cd Backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   Create `.env` file in Backend directory:
   ```env
   Mongo_url=mongodb://localhost:27017/healthbites
   GEMINI_API_KEY=your_gemini_api_key
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Start MongoDB**
   ```bash
   # If MongoDB is installed locally
   mongod
   
   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:7
   ```

5. **Start Backend Server**
   ```bash
   npm start
   ```

#### Frontend Setup
1. **Navigate to Frontend**
   ```bash
   cd Frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   Create `.env` file in Frontend directory:
   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

### Option 3: Production Deployment

#### Using Docker Compose (Production)
1. **Update docker-compose.yml**
   - Change ports as needed
   - Update environment variables
   - Configure SSL certificates

2. **Production Environment Variables**
   ```env
   NODE_ENV=production
   Mongo_url=mongodb://your-production-db-url
   GEMINI_API_KEY=your_production_api_key
   JWT_SECRET=your_production_jwt_secret
   ```

3. **Deploy**
   ```bash
   docker-compose -f docker-compose.yml up -d
   ```

#### Manual Production Setup
1. **Build Frontend**
   ```bash
   cd Frontend
   npm run build
   ```

2. **Serve Frontend**
   - Use Nginx to serve the `dist` folder
   - Configure reverse proxy for API calls

3. **Deploy Backend**
   ```bash
   cd Backend
   npm ci --only=production
   npm start
   ```

## Configuration Details

### Environment Variables

#### Backend (.env)
```env
# Database
Mongo_url=mongodb://admin:password@localhost:27017/healthbites?authSource=admin

# AI Service
GEMINI_API_KEY=your_gemini_api_key_here

# Security
JWT_SECRET=your_super_secure_jwt_secret

# Server
PORT=3000
NODE_ENV=production
```

#### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:3000
```

### Auth0 Configuration
Update the Auth0 configuration in `Frontend/src/App.tsx`:
```typescript
<Auth0Provider
  domain="your-auth0-domain.auth0.com"
  clientId="your_auth0_client_id"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
```

### Database Setup
MongoDB collections will be automatically created with proper indexes when the application starts.

## Monitoring and Health Checks

### Health Endpoints
- **Backend Health**: `GET /health`
- **Frontend**: Served by Nginx with proper headers

### Docker Health Checks
All Docker containers include health checks:
- Backend: Node.js health check script
- Frontend: Nginx status check
- MongoDB: Built-in health check

## Security Considerations

### Production Security
1. **Environment Variables**: Never commit `.env` files
2. **HTTPS**: Use SSL certificates in production
3. **CORS**: Configure proper CORS origins
4. **Database**: Use strong passwords and authentication
5. **API Keys**: Secure your Gemini AI API key

### Network Security
```nginx
# Add security headers in Nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check MongoDB is running
   - Verify connection string
   - Check network connectivity

2. **Gemini AI API Error**
   - Verify API key is correct
   - Check API quota and billing
   - Ensure proper permissions

3. **CORS Issues**
   - Update CORS configuration in backend
   - Check frontend-backend URL configuration

4. **Build Failures**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify all environment variables

### Logs and Debugging
```bash
# View Docker logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Check service status
docker-compose ps
```

## Scaling and Performance

### Production Optimizations
1. **Frontend**: Use CDN for static assets
2. **Backend**: Implement caching with Redis
3. **Database**: Use MongoDB Atlas for managed hosting
4. **Load Balancing**: Use multiple backend instances

### Monitoring
- Implement logging with Winston
- Use MongoDB monitoring tools
- Set up application performance monitoring (APM)

## Backup and Recovery

### Database Backup
```bash
# MongoDB backup
mongodump --uri="mongodb://user:pass@host:port/database"

# Restore
mongorestore --uri="mongodb://user:pass@host:port/database" dump/
```

### Application Backup
- Regular code repository backups
- Environment configuration backups
- SSL certificate backups

## Support and Maintenance

### Regular Maintenance
1. Update dependencies regularly
2. Monitor security vulnerabilities
3. Review and rotate API keys
4. Monitor application performance
5. Regular database maintenance

For additional support or deployment assistance, refer to the project documentation or contact the development team.
