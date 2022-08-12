const Router = require('express').Router()
const controller = require('../controllers/location')

Router.get('/view', controller.findAllLocations)
Router.get('/:locationId', controller.findALocation)

module.exports = Router
