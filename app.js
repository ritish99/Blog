const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const HTTP_PORT = process.env.PORT || 3000;

//express app
const app = express();

//connect to mongodb
const dbURI= "mongodb+srv://ritish:test1234@nodetuts.29h06.mongodb.net/nodetuts?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(HTTP_PORT))
    .catch((err) => console.log(err));

//registering view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('ritish'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

//route to the about page
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
});

//blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
});