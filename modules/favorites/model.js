import mongoose from "mongoose";

const favoritesSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    videoId: { type: String, required: true },
   },
  { timestamps: true },
);

// Prevent same user favoriting same video twice
favoritesSchema.index({ userId: 1, videoId: 1 }, { unique: true });

export const Favorites = mongoose.model("Favorites", favoritesSchema);
