const Router = require('express').Router()
const controller = require('../controllers/user')

Router.get('/view', controller.getAllUsers)

module.exports = Router
