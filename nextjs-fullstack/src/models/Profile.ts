import mongoose, { Schema } from "mongoose";

const ProfileSchema = new Schema({
  name: String,
  title: String,
  email: String,
  bio: String,
  skills: [String],
});

export const Profile = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
