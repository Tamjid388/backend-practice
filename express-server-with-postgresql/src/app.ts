import express, { NextFunction, Request, Response } from "express";

import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRouter } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.route";

const app = express();


app.use(express.json());

//--->initialize the db(postgreSQL)
initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running On root route");
});

app.use("/users", userRoutes);
app.use("/todos", todoRouter);

//auth route
app.use("/auth",authRoutes)


// todos crud


app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

export default app