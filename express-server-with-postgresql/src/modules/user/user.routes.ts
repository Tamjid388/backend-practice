
import express from "express";
import { userController } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../middlewares/auth";

const router=express.Router()

router.post("/",userController.createUser) 
router.get("/",logger,auth(),userController.getAllUsers)
router.get("/:id",userController.getUserById)
router.put("/:id",userController.updateUserById)
router.delete("/:id",userController.deleteUserById)

export const userRoutes=router