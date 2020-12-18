import axios from 'axios';

const API_KEY = '702f34e7a9124e908be73b54d61c5367';

export default axios.create({
  baseURL: `http://newsapi.org/v2`,
  headers: {
    'X-Api-Key': API_KEY,
  },
});
