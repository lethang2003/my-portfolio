import mongoose, { Schema } from "mongoose";

const AchievementSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  company: { 
    type: String, 
    required: true 
  },
  year: { 
    type: String, 
    required: true 
  },
  date: {
    type: Date,
    required: true
  },
  icon: { 
    type: String,
    enum: ['TrophyOutlined', 'BulbOutlined', 'TeamOutlined', 'StarOutlined', 'RocketOutlined'],
    default: 'TrophyOutlined'
  },
  description: String,
  certificateUrl: String,
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export const Achievement = mongoose.models.Achievement || mongoose.model("Achievement", AchievementSchema);