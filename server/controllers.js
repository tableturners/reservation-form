const models = require('./models.js');

const getRestaurant = async (req, res) => {
    try { 
        const { id } = req.params;
        const restaurant = await models.getRestaurantById(id)
        console.log(restaurant)
        res.send(restaurant)
    } catch (error) {
        console.log(error);
        res.status(500).send([]);
    }
    }

const getReservations = (req, res) => {

}

module.exports =  { getRestaurant }