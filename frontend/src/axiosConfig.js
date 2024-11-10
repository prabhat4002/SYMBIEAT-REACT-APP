import axios from 'axios';

axios.defaults.baseURL = 
    process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/';

console.log("Axios baseURL:", axios.defaults.baseURL);

export default axios;
