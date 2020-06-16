const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const {authentication} = require('./middlewares/auth');

const users = require('./routes/users');
const projects = require('./routes/projects');

mongoose.connect('mongodb://localhost/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const {connection} = mongoose;
const app = express();

connection.on('error', function (error) {
  console.log(error);
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json({
  extended: true
}));
app.use(cors());
app.use(users);

app.use(authentication());

app.use(projects);


app.listen(1337);