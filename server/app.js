const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('./config/passport')(passport);

require('dotenv').config();

const app = express();
const port = 3000;

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/auth'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});