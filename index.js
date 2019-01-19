//grabbing express framework
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
//Express server variables
//express server object
const server = express();
//Server listen PORT
const PORT = 4000;
//Body Parser
const parser = express.json();

// Custom module
const customMW = require('./custom_middleware.js')
//Middleware, used before endpoints/route handlers and after variables
server.use(
    parser, 
    logger('dev'),
    helmet(),
    customMW.gatekeeper
);


//Endpoints/Route handlers
server.get('/', (req, res) => {
    res.json({ message: "You are GETing!"});
});

//Listening express server
server.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});