import express from "express";
import adminAuth from "../middleware/adminAuth.js";

import { 
  registerUser, 
  loginUser, 
  loginAdmin, 
  getUserProfile, 
  updateUserProfile, 
  deleteUser 
} from "../controllers/userController.js";
// import { protect } from "../middleware/authMiddleware.js"

const userRouter = express.Router();

// Register user (customer)
userRouter.post("/register", registerUser);

// Login user (customer)
userRouter.post("/login", adminAuth, loginUser);

// Admin login
userRouter.post("/admin", loginAdmin);

// Get user profile
userRouter.get("/profile/:id", getUserProfile);

// Update user profile
userRouter.put("/profile",  updateUserProfile);

// Delete user profile
userRouter.delete("/profile", deleteUser);

export default userRouter;
