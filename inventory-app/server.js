// server.js
const express = require('express');
const app = express();

// For reading JSON bodies:
app.use(express.json());

// We'll store "movies" in memory for now:
let movies = [
  { id: 1, title: 'The Matrix', description: 'Sci-Fi' },
  { id: 2, title: 'Lord of the Rings', description: 'Fantasy' }
];

// GET /api/movies
app.get('/api/movies', (req, res) => {
  // Optionally filter by ?title=...
  const filter = req.query.title;
  let results = movies;
  if (filter) {
    results = movies.filter(m => m.title.includes(filter));
  }
  res.json(results);
});

// POST /api/movies
app.post('/api/movies', (req, res) => {
  const { title, description } = req.body;
  const newId = movies.length ? (Math.max(...movies.map(m => m.id)) + 1) : 1;
  const newMovie = { id: newId, title, description };
  movies.push(newMovie);
  res.status(201).json({ message: `Movie ${title} created`, newMovie });
});

// GET /api/movies/:id
app.get('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(m => m.id === id);
  if (!movie) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(movie);
});

// PUT /api/movies/:id
app.put('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(m => m.id === id);
  if (!movie) {
    return res.status(404).json({ error: 'Not found' });
  }
  const { title, description } = req.body;
  if (title) movie.title = title;
  if (description) movie.description = description;
  res.json({ message: `Movie ${id} updated`, movie });
});

// DELETE /api/movies/:id
app.delete('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  movies = movies.filter(m => m.id !== id);
  res.json({ message: `Movie ${id} deleted` });
});

// DELETE /api/movies
app.delete('/api/movies', (req, res) => {
  movies = [];
  res.json({ message: 'All movies deleted' });
});

// Start the server
const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`inventory-app listening on port ${PORT}...`);
});
