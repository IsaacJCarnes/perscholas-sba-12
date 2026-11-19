import express from "express";
import movieRouter from "./routes/movieRoutes.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/api", movieRouter);

app.listen(port, () => console.log("Server running on port: " + port));
