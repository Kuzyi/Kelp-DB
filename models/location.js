'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.hasMany(models.Comment, { foreignKey: 'locationId' })
    }
  }
  Location.init(
    {
      beachName: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Location',
      tableName: 'locations'
    }
  )
  return Location
}
