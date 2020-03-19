const Restaurant = require('../../db');

module.exports = {
    get: () => Restaurant.find()
};