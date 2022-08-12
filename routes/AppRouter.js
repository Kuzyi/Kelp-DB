const Router = require('express').Router()
const UserRouter = require('./user')
const locationRouter = require('./location')

Router.use('/users', UserRouter)
Router.use('/locations', locationRouter)

module.exports = Router
