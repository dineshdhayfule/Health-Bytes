# 🚀 HealthBites Vercel Deployment Guide

## Overview
This guide will help you deploy HealthBites to Vercel with the backend as serverless functions and frontend as a static site.

## Prerequisites

### Required Accounts & Services
1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Atlas** - Cloud MongoDB service at [mongodb.com/atlas](https://mongodb.com/atlas)
3. **Google Gemini AI API** - Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
4. **Auth0 Account** - Set up at [auth0.com](https://auth0.com)

## Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Make sure your project is in a Git repository
git init
git add .
git commit -m "Initial commit for Vercel deployment"

# Push to GitHub/GitLab/Bitbucket
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Setup MongoDB Atlas

1. Create a free MongoDB Atlas account
2. Create a new cluster
3. Setup database user and password
4. Whitelist Vercel's IP addresses (or use 0.0.0.0/0 for all IPs)
5. Get your connection string (it should look like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/healthbites?retryWrites=true&w=majority
   ```

### 3. Configure Auth0 for Vercel

1. In your Auth0 dashboard:
   - Add your Vercel domain to **Allowed Callback URLs**
   - Add your Vercel domain to **Allowed Logout URLs**
   - Add your Vercel domain to **Allowed Web Origins**

Example URLs (replace with your actual Vercel domain):
```
https://your-app-name.vercel.app
https://your-app-name.vercel.app/callback
```

### 4. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `/` (leave blank)
   - **Build Command**: `cd Frontend && npm run vercel-build`
   - **Output Directory**: `Frontend/dist`

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: healthbites
# - Directory: ./
# - Override build command? Yes
# - Build command: cd Frontend && npm run vercel-build
# - Override output directory? Yes  
# - Output directory: Frontend/dist
```

### 5. Configure Environment Variables

In your Vercel dashboard, go to **Project Settings → Environment Variables** and add:

```env
# Required for Backend API
GEMINI_API_KEY=your_actual_gemini_api_key
JWT_SECRET=your_super_secure_jwt_secret_here
Mongo_url=mongodb+srv://username:password@cluster.mongodb.net/healthbites?retryWrites=true&w=majority
NODE_ENV=production

# Required for Frontend
VITE_BACKEND_URL=https://your-app-name.vercel.app
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
```

### 6. Update Frontend Auth0 Configuration

Update `Frontend/src/App.tsx` to use environment variables:

```typescript
<Auth0Provider
  domain={import.meta.env.VITE_AUTH0_DOMAIN || "dev-3saa5w2monm3q0wf.us.auth0.com"}
  clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || "KWfBmQUat9NjJUfkUEzjtyxcBfJ9eHxx"}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
```

### 7. Redeploy

After setting environment variables, trigger a redeploy:

```bash
# Via CLI
vercel --prod

# Or commit and push changes to trigger auto-deployment
git add .
git commit -m "Configure for Vercel deployment"
git push
```

## Project Structure for Vercel

```
HealthBites-main/
├── api/                    # Serverless functions
│   ├── index.js           # Main API handler
│   └── package.json       # API dependencies
├── Frontend/              # React frontend
│   ├── src/
│   ├── dist/             # Built frontend (auto-generated)
│   ├── package.json
│   └── vite.config.ts
├── Backend/              # Original backend (used by API)
│   ├── route/
│   ├── model/
│   └── ...
├── vercel.json           # Vercel configuration
└── .env.vercel          # Environment template
```

## API Endpoints After Deployment

Your API will be available at:
```
https://your-app-name.vercel.app/api/user
https://your-app-name.vercel.app/api/meal
https://your-app-name.vercel.app/api/analysis
https://your-app-name.vercel.app/health
```

## Testing Your Deployment

1. **Frontend**: Visit `https://your-app-name.vercel.app`
2. **API Health**: Visit `https://your-app-name.vercel.app/health`
3. **Authentication**: Try logging in with Auth0
4. **Food Recognition**: Test uploading an image
5. **Database**: Add some food entries and check if they persist

## Troubleshooting

### Common Issues

1. **API Routes Not Working**
   - Check `vercel.json` configuration
   - Verify environment variables are set
   - Check function logs in Vercel dashboard

2. **Database Connection Issues**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist in MongoDB Atlas
   - Ensure database user has proper permissions

3. **Auth0 Issues**
   - Verify callback URLs are correctly set
   - Check Auth0 domain and client ID
   - Ensure CORS is properly configured

4. **Build Failures**
   - Check build command is correct
   - Verify all dependencies are in package.json
   - Check for any TypeScript errors

### Viewing Logs

```bash
# View function logs
vercel logs your-app-name.vercel.app

# View build logs in Vercel dashboard
# Go to Deployments → Click on deployment → View Function Logs
```

## Performance Optimization

### For Better Performance:

1. **Image Optimization**: Use Vercel's image optimization
2. **Caching**: Configure proper cache headers
3. **Bundle Splitting**: Already configured in vite.config.ts
4. **Database Indexing**: MongoDB indexes are created via mongo-init.js

## Security Best Practices

1. **Environment Variables**: Never commit API keys to Git
2. **CORS**: Properly configure CORS origins
3. **Auth0**: Use proper callback URLs
4. **Database**: Use strong passwords and proper user permissions

## Custom Domain (Optional)

1. In Vercel dashboard, go to **Project Settings → Domains**
2. Add your custom domain
3. Configure DNS as instructed
4. Update Auth0 settings with new domain

## Limitations of Vercel Deployment

- **File Upload Size**: Limited to 5MB for free tier
- **Function Duration**: Max 10s for free tier, 30s for pro
- **Database**: Requires external MongoDB (Atlas recommended)
- **Stateful Operations**: All functions are stateless

## Cost Considerations

- **Vercel**: Free tier includes 100GB bandwidth, 6000 GB-hours
- **MongoDB Atlas**: Free tier includes 512MB storage
- **Google Gemini AI**: Pay per API call
- **Auth0**: Free tier includes 7000 MAUs

Your HealthBites app is now ready for production on Vercel! 🎉
