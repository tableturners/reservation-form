const models = require('../models/restaurants');

const getRestaurant = (req, res) => {
    console.log('controller')
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

const getReservations = (req, res) => {

}

module.export =  getRestaurant ;