const express = require('express')
const router = express.Router()

const carController = require('../controllers/car.controller');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
})

router.get('/car', carController.getCar);

router.get('/car/inbound', carController.inbound);

router.get('/car/outbound', carController.outbound)

module.exports = router
