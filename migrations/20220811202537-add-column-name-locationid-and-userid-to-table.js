'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return (
      queryInterface.addColumn('comments', 'locationId', {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'locations',
          key: 'id'
        }
      }),
      queryInterface.addColumn('comments', 'userId', {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      })
    )
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeColumn('comments', 'locationId'),
      queryInterface.removeColumn('comments', 'userId')
    )
  }
}
