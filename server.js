// import config, {nodeEnv, logStars} from './config';

// console.log(config, nodeEnv);

// logStars('Function');

/* import https from 'https';

https.get('https://wwww.lynda.com', res => {
    console.log('Response status code: ', res.statusCode);

    res.on('data', chunk => {
        console.log(chunk.toString());
    });

}).on('error', err => {
    console.error(err);
}); */

// import http from 'http';

// const server = http.createServer();

// server.listen(8080);

// server.on('request', (req, res) => {
//     res.write('Hello HTTP!\n');
//     setTimeout(() => {
//         res.write('I can stream!\n');
//         res.end();
//     }, 2000);
// });

import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

// server.get('/', (req, res) => {
    //     res.send('Hello Express');
    // });
    server.use(sassMiddleware({
        src: path.join(__dirname, 'sass'),
        dest: path.join(__dirname, 'public')
    }));
    
    server.set('view engine', 'ejs');
    
    import './serverRender';

    server.get('/', (req, res) => {
        res.render('index', {
            content: '...'
        });
    });
    /* 
    // import fs from 'fs';
server.get('/about.html', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });
}); */

server.use('/api', apiRouter);
server.use(express.static('public'));

// server.listen(config.port, () => {
//     console.info('Express listening on port ', config.port);
// });

server.listen(config.port, config.host, () => {
    console.info('Express listening on port ', config.port);
});
/* import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    //res.send('Hello Express');
    res.render('index');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express is listening on port', config.port);
}); */