const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// send the response "ok".
app.get('/', (req, res) => {
  res.send('ok');
});
// Create an express simple API
app.get('/test', (req, res) => {
  res.json({ status: 200, message: 'ok' });
});
app.get('/time', (req, res) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  res.json({
    status: 200,
    message: `${hours}:${minutes}`
  });
});

// Let's complicate the API
app.get('/hello/:id', (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    status: 200,
    message: `Hello, ${id}`
  });
});

app.get('/search', (req, res) => {
  const search = req.query.s;

  if (search) {
    res.status(200).json({
      status: 200,
      message: 'ok',
      data: search
    });
  } else {
    res.status(500).json({
      status: 500,
      error: true,
      message: 'you have to provide a search'
    });
  }
});
//  Set up the basis for CRUD
const movies = [
       { id:1,title: 'Jaws', year: 1975, rating: 8 },
       { id:2,title: 'Avatar', year: 2009, rating: 7.8 },
       { id:3,title: 'Brazil', year: 1985, rating: 8 },
       { id:4,title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
   ]

app.get('/movies/read', (req, res) => {
  res.status(200).json({ status: 200, data: movies })
})
  // Sort the movies by date
app.get('/movies/read/by-date', (req, res) => {
  // Return a response with a status of 200 and the sorted list of movies as the data
  res.status(200).json({ status: 200, data: movies.sort((a,b)=>a.year-b.year) })
})
 // Sort the movies by rating
app.get('/movies/read/by-rating', (req, res) => {
  // Return a response with a status of 200 and the sorted list of movies as the data
  res.status(200).json({ status: 200, data: movies.sort((a,b)=>b.rating-a.rating) })
})
 // Sort the movies by title
app.get('/movies/read/by-title', (req, res) => {
  // Return a response with a status of 200 and the sorted list of movies as the data
  res.status(200).json({ status: 200, data: movies.sort((a,b)=>a.title.charCodeAt(0)-b.title.charCodeAt(0)) })
})

app.get('/movies/read/id/:id', (req, res) => {
  const id = parseInt(req.params.id,10)

  // Find the movie with the matching id
  const movie = movies.find(movie => movie.id === id)

  // If the movie was found, send it back as the response
  if (movie) {
    res.status(200).json({ status: 200, data: movie })
  } else {
    // If the movie was not found, send a 404 status code and a "not found" message
    res.status(404).json({ status: 404, error: true, message: `the movie ${id} does not exist` })
  }
})
