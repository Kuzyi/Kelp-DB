const Router = require('express').Router()
const controller = require('../controllers/comment')

Router.get('/all', controller.findAllComments)
Router.post('/', controller.createComment)
Router.put('/:commentId', controller.updateComment)
Router.delete('/:commentId', controller.deleteComment)

module.exports = Router
