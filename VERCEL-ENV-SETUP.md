# HealthBites - Environment Variables for Vercel

## Go to: https://vercel.com/dashboard → health-bytes → Settings → Environment Variables

## Add these variables (Production + Preview + Development):

# 🔑 API Keys (Required)
GEMINI_API_KEY=your_actual_gemini_api_key_here
JWT_SECRET=your_super_secure_jwt_secret_here

# 🗄️ Database (Required)
Mongo_url=mongodb+srv://username:password@cluster.mongodb.net/healthbites?retryWrites=true&w=majority

# 🌐 App Configuration
NODE_ENV=production
VITE_BACKEND_URL=https://health-bytes-1grlfbgwx-dineshdhayfule-5542s-projects.vercel.app

# 🔐 Auth0 Configuration (Update with your actual values)
VITE_AUTH0_DOMAIN=dev-60zi0xyy8c7q2hin.us.auth0.com
VITE_AUTH0_CLIENT_ID=xaoj4WKWelAfgOTQgIOkmhjPsIvzDj3V

## 📝 Notes:
# - Replace the Auth0 values with your actual domain and client ID
# - Get Gemini API key from: https://makersuite.google.com/app/apikey
# - Create MongoDB Atlas cluster at: https://mongodb.com/atlas
# - Make sure to set these for all environments (Production, Preview, Development)
