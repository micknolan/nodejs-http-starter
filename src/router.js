const express = require('express');
const router = new express.Router();
const helloController = require('./helloController.js');

// routes + map route to business logic 
const GET_HELLO = '/hello';
router.route(GET_HELLO).get(helloController.sayHello);

const GET_HELLO_NAME = '/hello/:name';
router.route(GET_HELLO_NAME).get(helloController.sayHelloWithParameter);


module.exports = router;