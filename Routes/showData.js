const route = require("express").Router()
const controller = require("../controllers/showData")

route.get("/showData", controller.showData);

module.exports = route