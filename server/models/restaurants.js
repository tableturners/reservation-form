const Restaurant = require('../../db');

module.exports = {
    get: (_id) => Restaurant.findById(_id)
};