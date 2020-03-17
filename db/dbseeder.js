const faker = require('faker');
const db = require('./index.js');

const seedRestaurantsData = () => {
  for (let i = 0; i < 100; i++) {
    const name = faker.random.word();
    const dates = faker.date.future();
    const timeslots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM']
    const partySize = faker.random.number(20);    
    db.Restaurant.create({
      _id: i,
      name: name,
      dates: dates, 
      timeslots: timeslots,
      partySize: partySize
    }, (err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log(success);
      }
    });
  };
}


seedRestaurantsData();
module.exports = { seedRestaurantsData }

