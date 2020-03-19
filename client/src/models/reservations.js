import axios from 'axios';

const reservations = {
    get: () => axios.get('api/restaurants').then(({data}) => data),
};
export default reservations;