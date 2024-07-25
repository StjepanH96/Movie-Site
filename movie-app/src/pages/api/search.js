import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: 'Query parameter q is required' });
  }

  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    console.error('TMDB_API_KEY is not defined');
    return res.status(500).json({ error: 'Server configuration error' });
  }
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(q)}`;

  try {
    const response = await fetch(url);
    const data = await response.json(); // Always parse the JSON to inspect the full response
    if (!response.ok) {
      console.error('Error fetching data:', response.status, response.statusText, data);
      return res.status(response.status).json({ error: response.statusText });
    }
    res.status(200).json({ results: data.results });
  } catch (error) {
    console.error('Internal Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}