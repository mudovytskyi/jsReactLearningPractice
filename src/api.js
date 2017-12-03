// all api logic
//only file should import libraries to fetch data from ajax

import axios from 'axios';

export const fetchContest = contestId => {
    return axios.get(`/api/contests/${contestId}`)
        .then(resp => resp.data);
}