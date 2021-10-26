const dotenv = require('dotenv');
const express = require('express');
dotenv.config({ path: './config.env' });
const app = express();
require('./db/conn');

// middleware to access the data of form
app.use(express.json());

// linking router through middleware
app.use(require('./router/auth'));

// const User= require('./models/userSchema');

// Middleware
// it helps in authentication
// checking before responging to request
const middleware = (req, res, next) => {
  console.log('middleware');
  next();
};

// Handling get post req
app.get('/', (req, res) => {
  res.send('hello this my home page');
});
app.get('/about', middleware, (req, res) => {
  res.send('hello this my about page');
});
app.get('/contact', (req, res) => {
  res.send('hello this my contact page');
});
app.get('/signup', (req, res) => {
  res.send('hello this my signup page');
});
app.get('/signin', (req, res) => {
  res.send('hello this my signin page');
});

// listening on port
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port:${process.env.PORT}`);
});
