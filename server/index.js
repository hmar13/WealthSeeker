const express = require('express');
const cors = require('cors');

const router = require('./router');
const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  try {
    console.log(`Server is listening on port: ${PORT}`);
  } catch (error) {
    console.log('Error connecting to server:', error);
  }
})