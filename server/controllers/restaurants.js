const models = require('../models');

module.exports = {
    get: (req, res) => {
        if (req.params.id === undefined) {
            models.restaurants.get()
            .then((restaurants) => {
                res.send(restaurants);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send([]);
            });
        }
    }
}