const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: false, unique: false },
    weight: { type: Number, required: false },
    height: { type: Number, required: false },
    age:{type:Number,required:true},
    gender: { type: String, enum: ['male', 'female'], required: true },
    targetCalories: { type: Number, required: false },
    profession: { type: String, required: false },
    activityLevel: { type: String, enum: ['sedentary', 'moderate', 'active'], required: false },
    healthGoals: [{ type: String }],
    allergies: [{ type: String }],
    dailyMealPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DailyMealPlan' }] // Reference to DailyMealPlan
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
