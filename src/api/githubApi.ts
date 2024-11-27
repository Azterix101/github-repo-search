import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: process.env.REACT_APP_GITHUB_TOKEN ? `token ${process.env.REACT_APP_GITHUB_TOKEN}`: '',
  },
});

export default githubApi;
