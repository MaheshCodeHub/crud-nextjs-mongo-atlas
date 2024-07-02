import mongoose, { Schema } from "mongoose";

// Define the schema
const userSchema = new Schema(
  {
    email: String,
    password: String
  },
  {
    timestamps: true
  }
);

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
