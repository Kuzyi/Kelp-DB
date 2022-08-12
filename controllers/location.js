const { Location } = require('../models')

const findAllLocations = async (req, res) => {
  try {
    let locations = await Location.findAll()
    res.send(locations)
  } catch (error) {
    throw error
  }
}

const findALocation = async (req, res) => {
  try {
    let location = await Location.findByPk(req.params.id)
    res.send(location)
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllLocations,
  findALocation
}
