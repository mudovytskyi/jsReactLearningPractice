// server rendering with reactDOMServer
import React from 'react';
import ReactDOMServer from 'react-dom/server'

import App from './src/components/App';

// fetch the data from the api
import config from './config';
import axios from 'axios';

//console.log(`${config.serverUrl}/api/contests`);

const serverRender = () => 
    axios.get(`${config.serverUrl}/api/contests`)
   .then(resp => {
        // console.log(resp.data);
        return {
            initialMarkup: ReactDOMServer.renderToString(
                <App initialContests={resp.data.contests} />
            ),
            initialData: resp.data
        };
    })
    // })
    .catch(err => {
        console.error(`CURRENT ERR: ${err}`);
    });
// }

export default serverRender;