const Router = require('express').Router()
const controller = require('../controllers/comment')
const middleware = require('../middleware')

Router.get('/all', controller.findAllComments)
Router.get('/:locationId', controller.findCommentsByLocation)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createComment
)
Router.put(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateComment
)
Router.delete(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteComment
)

module.exports = Router
