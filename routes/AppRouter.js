const Router = require('express').Router()
const UserRouter = require('./user')

Router.use('/users', UserRouter)

module.exports = Router
