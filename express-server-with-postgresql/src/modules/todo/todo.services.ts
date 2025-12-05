import { pool } from "../../config/db";

export const serviceCreateTodo = async (user_id: number, title: string) => {
  const result = await pool.query(
    `INSERT INTO todos(user_id, title) VALUES ($1, $2) RETURNING *`,
    [user_id, title]
  );
  return result.rows[0];
};

export const serviceGetTodos = async () => {
  const result = await pool.query(`SELECT * FROM todos`);
  return result.rows;
};

export const serviceDeleteTodo = async (id: string) => {
  const result = await pool.query(
    `DELETE FROM todos WHERE id = $1`,
    [id]
  );
  return result
};

