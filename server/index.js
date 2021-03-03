const express = require('express');
const cors = require('cors');

const router = require('./router');
const app = express();

const PORT = 3001;

//Middleware
app.use(cors());
app.use(express.json());
app.use(router);

//Listen to server connection
app.listen(PORT, () => {
  try {
    console.log(`Server is listening on port: ${PORT}`);
  } catch (error) {
    console.log('Error connecting to server:', error);
  }
})