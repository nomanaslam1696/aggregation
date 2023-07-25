const route = require('express').Router();

const controller = require('../controllers/seeder');

route.post("/postData", controller.seeder);

module.exports = route;