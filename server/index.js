const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Controllers = require('./controllers/restaurants');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.get('/api/restaurants/:id/', Controllers.getRestaurant)
// const port = process.env.PORT || '3001';
const port = 8080;

app.listen(port, () => console.log(`Server running on localhost ${port}`));