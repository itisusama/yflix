import mongoose from "mongoose";

const videoDetailsSchema = new mongoose.Schema({
  cover: { type: String, required: true },
  poster: { type: String, required: true },
  title: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String },
  uploadDate: { type: Date, default: Date.now },
  country: { type: String },
  cast: { type: [String], default: [] },
}, { timestamps: true });

export const VideoDetails = mongoose.model("VideoDetails", videoDetailsSchema);