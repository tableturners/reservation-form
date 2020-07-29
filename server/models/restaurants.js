const Restaurant = require('../../db');

const getRestaurantById = (id) => {
    Restaurant.findById(id)
}

module.export = { getRestaurantById };