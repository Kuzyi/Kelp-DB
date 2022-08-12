const { Comment, Location, User } = require('../models')

const findAllComments = async (req, res) => {
  try {
    let comments = Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const createComment = async (req, res) => {
  try {
    let locationId = parseInt(req.body.locationId)
    let userId = parseInt(req.body.userId)
    let comment = await Comment.create({
      ...req.body,
      locationId,
      userId
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const updateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.commentId)
    let commentBody = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(commentBody)
  } catch (error) {
    throw error
  }
}

const deleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.commentId)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllComments,
  createComment,
  updateComment,
  deleteComment
}
