const Router = require('express').Router()
const controller = require('../controllers/comment')
const middleware = require('../middleware')

Router.get('/all', controller.findAllComments)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createComment
)
Router.put('/:commentId', controller.updateComment)
Router.delete('/:commentId', controller.deleteComment)

module.exports = Router
