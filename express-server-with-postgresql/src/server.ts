import express, { Request, Response } from "express";
import { Pool } from "pg";
// npx neonctl@latest init
import path from "path";
import dotenv from "dotenv";
const app = express();
const port = 5000;
dotenv.config({ path: path.join(process.cwd(), ".env") });
app.use(express.json());
const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STR}`,
});

const initDB = async () => {
  await pool.query(`CREATE TABLE IF NOT EXISTS
    
    users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INT,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    
    )`);

  await pool.query(`
      CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES  users(id) ON DELETE CASCADE,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT false,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()

      )
      `);
};

initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/user", async (req: Request, res: Response) => {
  try {
    const { name, email, age, phone, address } = req.body;
    const result = await pool.query(
      `
  INSERT INTO users(name,email,age,phone,address)
  VALUES($1, $2, $3, $4, $5)
  RETURNING *`,

      [name, email, age, phone, address]
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
});
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);

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
});

// Get single user by id
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);

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
});
// Update single user by id
app.put("/users/:id", async (req: Request, res: Response) => {
  try {
    const {name,email}=req.body
    const id = req.params.id;
    const result = await pool.query(
      `
        UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *
      `,[name,email,id]
    );

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
});
// delete single user by id
app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    
    const id = req.params.id;
    const result = await pool.query(
    `DELETE  from users WHERE id=$1 `,[id]
    );


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
});













app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
