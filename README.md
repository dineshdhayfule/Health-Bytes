# 🍎 Health Bytes

**A modern AI-powered health and nutrition tracking application built with React and Node.js**

## 🌐 Live Demo
**🚀 [View Live Application](https://health-bite.netlify.app/)**

---

## 📋 Table of Contents
- [Live Demo](#live-demo)
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Health Bytes is a comprehensive health and nutrition tracking application that combines AI-powered food recognition, meal planning, and wellness monitoring. Users can track their daily nutrition, plan meals, monitor exercise, and achieve their health goals with personalized recommendations.

**🌟 Try it live at: [health-bite.netlify.app](https://health-bite.netlify.app/)**

## ✨ Features

### 🤖 **AI-Powered Food Recognition**
- Upload food images for automatic nutritional analysis
- Powered by Google Gemini AI for accurate food identification
- Instant calorie and nutrient calculation
- Detailed ingredient breakdown

### 📊 **Comprehensive Tracking**
- Daily meal logging and calorie tracking
- Exercise and fitness monitoring
- Water intake tracking
- Progress visualization and analytics

### 🍽️ **Smart Meal Planning**
- AI-generated personalized meal plans
- Indian cuisine recipe recommendations
- Grocery list generation
- Dietary preference and allergy consideration

### 👤 **User Management**
- Secure authentication with Auth0
- Personalized user profiles
- Health goal setting and tracking
- Dietary restriction management

### 💬 **Interactive Support**
- AI-powered chat bot assistance
- Common questions and help
- Real-time user support

## 🛠️ Technology Stack

### **Frontend**
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Auth0** for authentication
- **Axios** for HTTP requests
- **Lucide React** for icons

### **Backend**
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Google Gemini AI** for food recognition
- **JWT** for authentication
- **Multer** for file uploads
- **bcrypt** for password hashing

### **Deployment**
- **Frontend**: Netlify
- **Backend**: Vercel (Serverless Functions)
- **Database**: MongoDB Atlas

## 🚀 Installation

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Google Gemini AI API key
- Auth0 account

### **1. Clone the Repository**
```bash
git clone https://github.com/dineshdhayfule/Health-Bytes.git
cd Health-Bytes
```

### **2. Backend Setup**
```bash
cd Backend
npm install
```

Create `Backend/.env` file:
```env
Mongo_url=mongodb://localhost:27017/healthbytes
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
PORT=3000
```

### **3. Frontend Setup**
```bash
cd Frontend
npm install
```

Create `Frontend/.env` file:
```env
VITE_BACKEND_URL=http://localhost:3000
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
```

### **4. Start Development Servers**

**Backend:**
```bash
cd Backend
npm start
```

**Frontend:**
```bash
cd Frontend
npm run dev
```

## 🖥️ Usage

1. **Access the Application**: 
   - **Live**: https://health-bite.netlify.app/
   - **Local**: http://localhost:5173
2. **Sign Up/Login**: Use Auth0 authentication
3. **Complete Profile**: Set your health goals and preferences
4. **Track Meals**: Upload food images or manually log meals
5. **Plan Meals**: Generate AI-powered meal plans
6. **Monitor Progress**: View your daily and weekly health analytics

## 🔌 API Endpoints

### **Authentication**
```
POST /api/auth/login     - User login
POST /api/auth/register  - User registration
```

### **Meal Management**
```
GET  /meal/today-calories/:userid    - Get today's calories
POST /meal/add-food                  - Add food entry
GET  /meal/food-history/:userid      - Get meal history
```

### **Food Analysis**
```
POST /analysis/analyze   - Analyze food images with AI
```

### **Meal Planning**
```
POST /generate-meal-plan - Generate AI meal plans
```

### **User Management**
```
GET    /user/:id         - Get user profile
PUT    /user/:id         - Update user profile
DELETE /user/:id         - Delete user profile
```

## 🔐 Environment Variables

### **Backend Variables**
| Variable | Description | Required |
|----------|-------------|----------|
| `Mongo_url` | MongoDB connection string | ✅ |
| `GEMINI_API_KEY` | Google Gemini AI API key | ✅ |
| `JWT_SECRET` | JWT signing secret | ✅ |
| `PORT` | Server port (default: 3000) | ❌ |

### **Frontend Variables**
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BACKEND_URL` | Backend API URL | ✅ |
| `VITE_AUTH0_DOMAIN` | Auth0 domain | ✅ |
| `VITE_AUTH0_CLIENT_ID` | Auth0 client ID | ✅ |

## 🚀 Deployment

### **Frontend (Netlify)**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### **Backend (Vercel)**
1. Deploy backend as serverless functions
2. Configure environment variables
3. Update CORS settings for Netlify domain

### **Database (MongoDB Atlas)**
- Cloud-hosted MongoDB database
- Automatic scaling and backup

**Live Application**: [https://health-bite.netlify.app/](https://health-bite.netlify.app/)

## 📱 Screenshots

### **Homepage**
![Homepage](https://via.placeholder.com/800x400/4F46E5/white?text=Health+Bytes+Homepage)

### **Food Recognition**
![Food Recognition](https://via.placeholder.com/800x400/10B981/white?text=AI+Food+Recognition)

### **Meal Planning**
![Meal Planning](https://via.placeholder.com/800x400/F59E0B/white?text=Smart+Meal+Planning)

### **Progress Tracking**
![Progress Tracking](https://via.placeholder.com/800x400/EF4444/white?text=Progress+Analytics)

*Replace placeholder images with actual screenshots of your application*

## 🎯 Project Highlights

- ✅ **Full-stack application** with modern tech stack
- ✅ **AI integration** for food recognition and meal planning
- ✅ **Secure authentication** with Auth0
- ✅ **Responsive design** for all devices
- ✅ **Cloud deployment** on Netlify and Vercel
- ✅ **Real-time data** with MongoDB Atlas

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dinesh Dhayfule**
- GitHub: [@dineshdhayfule](https://github.com/dineshdhayfule)
- LinkedIn: [https://www.linkedin.com/in/dinesh-dhayfule/]
- Email: dineshdhayfule@gmail.com


## 🙏 Acknowledgments

- Google Gemini AI for food recognition capabilities
- Auth0 for authentication services
- MongoDB Atlas for database services
- Netlify for frontend hosting
- Vercel for backend deployment
- All open-source contributors

## 📞 Support

For support, email your-email@example.com or create an issue in this repository.

---

**⭐ Star this repository if you found it helpful!**

**🌐 Live Demo: [health-bite.netlify.app](https://health-bite.netlify.app/)**