import express from "express";
import path from "path";

const HOST = "127.0.0.1";
const PORT = 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`));