import axios from 'axios';

axios.defaults.baseURL=
    process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' :'http://localhost:3000';