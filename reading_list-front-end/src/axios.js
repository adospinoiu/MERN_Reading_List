import axios from 'axios';

const instance = axios.create({
    // for DEVELOPMENTAL
    baseURL: "http://localhost:9000"

    // for PRODUCTION
    // baseURL: "https://mern-reading-list-backend.herokuapp.com"
});

export default instance;