import express from "express";
import "dotenv/config";
import morgan from "morgan";
import router from "./routes/route.js";
import { sql } from "./db/db.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(morgan("dev"));

app.use("/api/products", router);

const connectDB = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS products(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image TEXT NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("Connected to postgresql");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server Running");
  });
});
