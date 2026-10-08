import express from "express";
import 'dotenv/config';

const server = express();

const config = {
    hostname: process.env.APP_HOSTNAME,
    port: process.env.APP_PORT
};

server.get('/', function(req, res) {
    res.send('Hello Shen, your name is cool!');
});

server.listen(config, ()=> {
    console.log(`server running at http://${config.hostname}:${config.port}`);
});