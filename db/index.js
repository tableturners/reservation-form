const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/turntable', { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  _id: Number,
  name: String,
  dates: [String],
  timeslots: [String],
  partySize: [Number],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const get = (query = {}, callback) => {
  Restaurant.find(query, { __v: 0 }, (err, success) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, success[0]);
    }
  });
};

module.exports = Restaurant;



