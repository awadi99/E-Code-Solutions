import { connectionDb } from "./config/db.js";
import dotenv from 'dotenv';
import app from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
await connectionDb();

const server = app.listen(PORT,()=>{
  console.log(`server running on ${PORT}`);
})