// server rendering with reactDOMServer
import React from 'react';
import ReactDOMServer from 'react-dom/server'

import App from './src/components/App';

// fetch the data from the api
import config from './config';
import axios from 'axios';

//console.log(`${config.serverUrl}/api/contests`);
const getApiUrl = contestId => {
    return `${config.serverUrl}/api/contests` + 
        ( contestId
            ? `/${contestId}`
            : ``);
};

const getInitialData = (contestId, apiData) => {
   if (contestId) {
       return{
           currentContestId: apiData._id,
        //    currentContestId: apiData.id,
        //    contests: []
           contests: {
            //    [apiData.id]: apiData
               [apiData._id]: apiData
           }
       };
   }
    return {
        contests: apiData.contests
    }
};

const serverRender = (contestId) => 
    axios.get(getApiUrl(contestId))
   .then(resp => {
        // console.log(resp.data);
        const initialData = getInitialData(contestId, resp.data);
        return {
            initialMarkup: ReactDOMServer.renderToString(
                // <App initialContests={resp.data.contests} />
                // <App initialData={resp.data} />
                <App initialData={initialData} />
            ),
            initialData: initialData
        };
    })
    // })
    .catch(err => {
        console.error(`CURRENT ERR: ${err}`);
    });
// }

export default serverRender;