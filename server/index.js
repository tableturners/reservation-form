const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const Controllers = require('./controllers.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/restaurants/:id/', Controllers.getRestaurant);

const port = process.env.PORT || '3003';

app.listen(port, () => console.log(`Server running on localhost ${port}`));