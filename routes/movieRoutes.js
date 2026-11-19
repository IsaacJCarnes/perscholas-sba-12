import express from "express";
import { getByTitle, getById } from "../controllers/movieController.js";

const movieRouter = express.Router({ caseSensitive: true, strict: true });

movieRouter.get("/search", getByTitle);
movieRouter.get("/movies/:id", getById);

export default movieRouter;
