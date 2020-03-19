const Restaurant = require('../../db');

module.exports = {
    get: (id) => Restaurant.findById(id)
};