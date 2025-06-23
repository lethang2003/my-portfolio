import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  email: { 
    type: String, 
    required: true,
    trim: true,
    lowercase: true
  },
  message: { 
    type: String, 
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new'
  },
  replied: {
    type: Boolean,
    default: false
  },
  repliedAt: Date,
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true
});

// Index cho tìm kiếm
ContactSchema.index({ email: 1 });
ContactSchema.index({ createdAt: -1 });
ContactSchema.index({ status: 1 });

export const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);