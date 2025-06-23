import mongoose, { Schema } from "mongoose";

const ExperienceSchema = new Schema({
  position: { 
    type: String, 
    required: true 
  },
  company: { 
    type: String, 
    required: true 
  },
  period: { 
    type: String, 
    required: true 
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  responsibilities: [{ 
    type: String, 
    required: true 
  }],
  technologies: [String],
  location: String,
  description: String
}, {
  timestamps: true
});

export const Experience = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);