import "dotenv/config";
import axios from "axios";

const baseUrl = `https://www.omdbapi.com/`;
const apiKey = process.env.OMDB_API_KEY;

export async function getByTitle(req, res) {
  try {
    const title = req.query.title;

    if (!title) {
      return res
        .status(400)
        .json({ error: "Title query parameter is required" });
    }

    const response = await axios.get(`${baseUrl}?s=${title}&apiKey=${apiKey}`);

    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json({ error: "Failed to find movie details" });
  }
}

export async function getById(req, res) {
  try {
    const response = await axios.get(
      `${baseUrl}?i=${req.params.id}&apiKey=${apiKey}`,
    );

    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json({ error: "Failed to find movie details" });
  }
}
