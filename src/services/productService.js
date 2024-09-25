import axios from 'axios';

const API_URL = 'http://localhost:8081/users';

export default {
  getAllProducts() {
    return axios.get(API_URL);
  },
};
