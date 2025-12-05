import { Request, Response } from "express";
import { serviceCreateTodo, serviceDeleteTodo, serviceGetTodos } from "./todo.services";


export const createTodo = async (req: Request, res: Response) => {
  try {
    const { user_id, title } = req.body;

    const data = await serviceCreateTodo(user_id, title);

    res.status(201).json({
      success: true,
      message: "Todo created",
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const data = await serviceGetTodos();

    res.status(200).json({
      success: true,
      message: "Todos retrieved successfully",
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deleted = await serviceDeleteTodo(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
