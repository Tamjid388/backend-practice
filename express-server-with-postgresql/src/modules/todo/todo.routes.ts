import { Router } from "express";
import { createTodo, deleteTodo, getAllTodos } from "./todo.controller";


const router=Router()

router.post("/", createTodo);
router.get("/", getAllTodos);
router.delete("/:id", deleteTodo);
export const todoRouter=router