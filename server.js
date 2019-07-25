const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
mongoose
  .connect('mongodb+srv://catalin:'+ process.env.MONGO_ATLAS_PW +'@mern-project-ueyld.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  })
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

// use routes
app.use('/api/items', items);
console.log(process.env.NODE_ENV)

// serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))