const express = require('express');
const app = express();
const mongoose=require('mongoose')
const port = 8000;
const url='mongodb+srv://malek:admin123@cluster0.53cr0fq.mongodb.net/myDB?retryWrites=true&w=majority'
try {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongodb');
  });
} catch (error) {
  console.log(error.message);
}
const con=mongoose.connection
con.on('open',()=>console.log('connected...'))
app.use(express.json())
const dataRouter=require('./routers/aliens')
app.use('/aliens',dataRouter);
app.listen(port,()=>
console.log('server started on 8000'))



// const movieList = new mongoos.Schema({
//   title:String,
//   year:Number,
//   rating:Number
// });
// const MyModel = mongoos.model('MyModel', movieList);
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
// // send the response "ok".
// app.get('/', (req, res) => {
//   res.send('ok');
// });
// // Create an express simple API
// app.get('/test', (req, res) => {
//   res.json({ status: 200, message: 'ok' });
// });
// app.get('/time', (req, res) => {
//   const currentTime = new Date();
//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();

//   res.json({
//     status: 200,
//     message: `${hours}:${minutes}`
//   });
// });

// // Let's complicate the API
// app.get('/hello/:id', (req, res) => {
//   const id = req.params.id;

//   res.status(200).json({
//     status: 200,
//     message: `Hello, ${id}`
//   });
// });

// app.get('/search', (req, res) => {
//   const search = req.query.s;

//   if (search) {
//     res.status(200).json({
//       status: 200,
//       message: 'ok',
//       data: search
//     });
//   } else {
//     res.status(500).json({
//       status: 500,
//       error: true,
//       message: 'you have to provide a search'
//     });
//   }
// });
// //  Set up the basis for CRUD
// // const movies = [
// //        { id:1,title: 'Jaws', year: 1975, rating: 8 },
// //        { id:2,title: 'Avatar', year: 2009, rating: 7.8 },
// //        { id:3,title: 'Brazil', year: 1985, rating: 8 },
// //        { id:4,title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
// //    ]

// app.get("/movies", async (req, res) => {
//   const moviesFromDB = await movieList.find({});

//     try {
//       res.send(moviesFromDB);
//     } catch (error) {
//       res.status(500).send(error);
//     }}
//     )
// app.post('/movies/add', (req, res) => {
//   // Extract the movie title, year, and rating from the request query
//   const title = req.query.title
//   const year = req.query.year
//   const rating = req.query.rating

//   // Check if the title and year are provided
//   if (!title || !year) {
//     // If either the title or year is missing, send a 403 status code and an error message
//     res.status(403).json({ status: 403, error: true, message: 'you cannot create a movie without providing a title and a year' })
//   } else {
//     // If the title and year are both provided, check if the year is a 4-digit number
//     if (year.length !== 4 || isNaN(year)) {
//       // If the year is not a 4-digit number, send a 403 status code and an error message
//       res.status(403).json({ status: 403, error: true, message: 'you cannot create a movie without providing a valid year' })
//     } else {
//      // If the year is a 4-digit number, create a new movie object
//       const newMovie = { title, year, rating: rating || 4 }

//       // Connect to the MongoDB database
//       const MongoClient = require('mongodb').MongoClient;
//       const uri = "mongodb+srv://malekkh:<kya2ixEgSDEBqhN>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
//       const client = new MongoClient(uri, { useNewUrlParser: true });
//       client.connect(err => {
//         const collection = client.db("test").collection("movies");

//         // Add the new movie to the movies collection
//         collection.insertOne(newMovie, function(err, res) {
//           console.log("Movie inserted");
//           client.close();
//         });
//       });

//       // Send a success message as the response
//       res.status(200).json({ status: 200, message: 'Movie added successfully' });
//     }
//   }
// });
// app.delete('/movies/delete/:id', (req, res) => {
//   const id = req.params.id;
//   const index = movies.findIndex((movie) => movie.id == id);
//   if (index === -1) {
//     res.status(404).json({
//       status: 404,
//       error: true,
//       message: `the movie ${id} does not exist`,
//     });
//   } else {
//     movies.splice(index, 1);
//     res.json({ movies });
//   }
// });
// // update 
// app.put('/movies/update/:id', (req, res) => {
//   const id = req.params.id;
//   const movieIndex = movies.findIndex((movie) => movie.id == id);
//   if (movieIndex === -1) {
//     res.status(404).json({
//       status: 404,
//       error: true,
//       message: `the movie ${id} does not exist`,
//     });
//   } else {
//     const { title, rating } = req.query;
//     if (title) {
//       movies[movieIndex].title = title;
//     }
//     if (rating) {
//       movies[movieIndex].rating = rating;
//     }
//     res.json({ movies });
//   }
// });