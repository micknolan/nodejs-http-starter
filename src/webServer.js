const http = require('http');
const express = require('express');
const cors = require('cors');
const PORT = 8080;

let httpServer;

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express();
        httpServer = http.createServer(app);

        // Middlewares  
        app.use(cors());
        // app.use(express.static('public')); 

        // Routing
        const router = require('./router.js');
        app.use('/api', router);

        httpServer.listen(PORT)
            .on('listening', () => {
                console.log(`Web server listening on port: ${PORT}`);
                resolve();
            })
            .on('error', err => {
                reject(err);
            });
    });
}

function close() {
    return new Promise((resolve, reject) => {
        httpServer.close((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

 
module.exports.initialize = initialize;
module.exports.close = close;