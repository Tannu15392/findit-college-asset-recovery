const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["lost", "found"], required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  desc: { type: String, required: true },
  photos: [{ type: String }],  // Cloudinary URLs
  contact: { type: String, required: true },
  reward: { type: String, default: "" },
  status: { type: String, enum: ["active", "claimed"], default: "active" },
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);