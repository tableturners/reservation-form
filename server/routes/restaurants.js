const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.route(['/', '/:id'])
    .get(controllers.restaurants.get);
    
module.exports = router;