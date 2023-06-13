import express from "express";
import path from "path";
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config(); // read .env files

const {
	DB_USER,
	DB_PASSWORD
} = process.env;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@express-todo-app.2yhjoxl.mongodb.net/?retryWrites=true&w=majority`).then(() => console.log('Connected!'));

const HOST = "127.0.0.1";
const PORT = 3001;


const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`));