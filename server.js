const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))