const Restaurant = require('../db/index.js');

const getRestaurantById = (id) => {
  return Restaurant.findById(id).exec();
}

module.exports = { getRestaurantById };