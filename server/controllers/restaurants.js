const models = require('../models');

module.exports = {
    get: (req, res) => {
        const { id } = req.params;
        // if (req.params.id === undefined) {
            models.restaurants.get(id)
            .then((restaurant) => {
                res.send(restaurant);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send([]);
            });
        }
    }
// }