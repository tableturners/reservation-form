const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes')


const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.use('/api/restaurants', routes.restaurants)
const port = process.env.PORT || '3001';

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/bundle.js'));
  })


app.listen(port, () => console.log(`Server running on localhost ${port}`));