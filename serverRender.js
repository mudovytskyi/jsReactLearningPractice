// fetch the data from the api

import config from './config';
import axios from 'axios';

console.log(`${config.serverUrl}/api/contests`);

axios.get(`${config.serverUrl}/api/contests`)
    .then(resp =>{
        console.log(resp.data);
    })
    .catch(err => {
        console.error(`CURRENT ERR: ${err}`);
    });