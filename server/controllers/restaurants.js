const models = require('../models');

module.exports = {
    get: (req, res) => {
        console.log('hit', req.params.id)
        if (req.params.id === undefined) {
            models.restaurants.get()
            .then((restaurants) => {
                console.log('resto', restaurants)
                res.send(restaurants);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send([]);
            });
        }
    }
}