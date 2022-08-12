const { User } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    let users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const createUser = async (req, res) => {
  try {
    let userBody = await User.create(req.body)
    res.send(userBody)
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}
