import axios from 'axios';

const reservations = {
    get: (id) => axios.get(`api/restaurants/${id}`).then(({data}) => data).catch(error => {console.log(error.response)}),
};
export default reservations;