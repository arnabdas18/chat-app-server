import { Router } from "express";

import {
  registerUser,
  authUser,
  allUsers,
} from "../controllers/userControllers.js";
import protect from "../middleware/authMiddleware.js";

const userRoutes = Router();

userRoutes.route("/").post(registerUser).get(protect, allUsers);
userRoutes.post("/login", authUser);

export default userRoutes;
