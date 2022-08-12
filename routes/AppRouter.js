const Router = require('express').Router()
const UserRouter = require('./user')
const locationRouter = require('./location')
const commentRouter = require('./comment')

Router.use('/users', UserRouter)
Router.use('/locations', locationRouter)
Router.use('/comments', commentRouter)

module.exports = Router
