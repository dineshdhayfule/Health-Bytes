# 🍎 Health Bytes

**A modern AI-powered health and nutrition tracking application built with React and Node.js**

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Health Bytes is a comprehensive health and nutrition tracking application that combines AI-powered food recognition, meal planning, and wellness monitoring. Users can track their daily nutrition, plan meals, monitor exercise, and achieve their health goals with personalized recommendations.

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

1. **Access the Application**: Open http://localhost:5173
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

## 📱 Screenshots

*Add screenshots of your application here*

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
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Google Gemini AI for food recognition capabilities
- Auth0 for authentication services
- MongoDB for database services
- All open-source contributors

## 📞 Support

For support, email your-email@example.com or create an issue in this repository.

---

**⭐ Star this repository if you found it helpful!**