const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || config.get('port') || 8000;

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json({ extended: true }));

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

// Answer API requests.
app.use('/', require('./routes/recipe.routes'));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(PORT, () =>
      console.log('Server was started at http://localhost:' + PORT)
    );
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
