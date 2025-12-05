import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

const createUser = async (
  name: string,
  email: string,
  password: string,
  role: string,
  age: string,
  phone: string,
  address: string
) => {
  const hashedPass = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `
    INSERT INTO users(name,email,password,role,age,phone,address)
    VALUES($1, $2, $3, $4, $5, $6,$7)
      RETURNING *`,

    [name, email, hashedPass, role, age, phone, address]
  );

  return result;
};

const getAllUsers = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};
const getUserById = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
  return result;
};

const updateUserById = async (name: string, email: string, id: string) => {
  const result = await pool.query(
    `
        UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *
      `,
    [name, email, id]
  );
  return result;
};

const deleteUserById = async (id: string) => {
  const result = await pool.query(`DELETE  from users WHERE id=$1 `, [id]);
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
