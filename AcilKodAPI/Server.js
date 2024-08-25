const express = require('express');
const bodyParser = require('body-parser');
const db = require('./DB');
const routes = require('./router');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});