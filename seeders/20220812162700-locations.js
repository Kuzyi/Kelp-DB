'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'locations',
      [
        {
          beachName: 'Crystal Pier',
          city: 'Wilmington',
          state: 'NC',
          image:
            'https://spot-thumbnails.cdn-surfline.com/spots/5842041f4e65fad6a7708a49/5842041f4e65fad6a7708a49_1500.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          beachName: 'North Carolina Beach',
          city: 'Carolina Beach',
          state: 'NC',
          image:
            'https://spot-thumbnails.cdn-surfline.com/spots/5842041f4e65fad6a7708a4b/5842041f4e65fad6a7708a4b_1500.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          beachName: 'Nags Head Pier',
          city: 'Nags Head',
          state: 'NC',
          image:
            'https://www.usasurfing.org/uploads/1/1/3/5/113568407/nc-prime-jpier_orig.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          beachName: 'Lido Beach',
          city: 'New York',
          state: 'NY',
          image:
            'https://spot-thumbnails.cdn-surfline.com/spots/5842041f4e65fad6a7708852/5842041f4e65fad6a7708852_1500.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          beachName: 'Lauderdale Beach',
          city: 'Fort Lauderdale',
          state: 'FL',
          image:
            'https://fishingbooker.com/blog/media/Fort-Lauderdale-1024x680.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          beachName: 'Trestles',
          city: 'San Diego',
          state: 'CA',
          image:
            'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2018/06/27114343/klein_april2018_lowers_41485-1-1560x1040.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          beachName: 'Coast Guard Beach',
          city: 'Eastham',
          state: 'MC',
          image:
            'https://www.mycapecodblog.com/wp-content/uploads/2017/01/surfercg-672x372.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          beachName: 'Malibu',
          city: 'Malibu',
          state: 'CA',
          image:
            'https://res.cloudinary.com/travelio/image/fetch/c_fill,f_auto,g_center,q_100/https://images.ctfassets.net/t13sz4t8kyqs/1CUHBpyck9pNDbSvEgN9JY/0df8afc010c8e6def6169c4bd21481c6/US.POI.Malibu_H__user.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {})
  }
}
