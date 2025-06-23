import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema({
  title: String,
  description: String,
  github: String,
  demo: String,
});

export const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);