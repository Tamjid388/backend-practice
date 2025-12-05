import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email,password,role, age, phone, address } = req.body;
    const result = await userServices.createUser(
      name,
      email,password,role,
      age,
      phone,
      address
    );

    res.status(200).json({
      success: true,
      message: "users added successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers()

    res.status(200).json({
      success: true,
      message: "users retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getUserById=async (req: Request, res: Response)=>{
  try {
    const id = req.params.id;
    const result = await userServices.getUserById(id)

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "users retrieved successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
const updateUserById=async (req: Request, res: Response)=>{
  try {
    const { name, email } = req.body;
    const id = req.params.id;
    const result = await userServices.updateUserById( name, email,id)

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
const deleteUserById=async (req: Request, res: Response)=>{
  try {
    const id = req.params.id;
    const result = await userServices.deleteUserById(id)

    res.status(200).json({
      success: true,
      message: "user deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const userController = {
  createUser,
  getAllUsers,getUserById,updateUserById,deleteUserById
};
