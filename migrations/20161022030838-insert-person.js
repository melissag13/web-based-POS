'use strict';

// Require our models
var models = require("../models");

var sequelize = require('../models').sequelize;


module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      return models.Person.bulkCreate(
      [
        {firstName: "Melissa", lastName: "Garcia", street: "123 Somewhere St", city: "St Cloud", state: "FL", zip: "33333", phone: "1234567890", email: "melissag13@gmail.com"},
        {firstName: "Kristi", lastName: "Heredia", street: "123 Somewhere St", city: "Clermont", state: "FL", zip: "33333", phone: "1234567890", email: "froglander@dukworld.net"},
        {firstName: "Kai", lastName: "Zhong", street: "123 Somewhere St", city: "Orlando", state: "FL", zip: "33333", phone: "1234567890", email: "huikaizhong@gmail.com"},
      ]
    )
    
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return models.Person.destroy({where:{firstName: [
        "Melissa",
        "Kristi",
        "Kai"
        ]}})
    .then(function() {
      // console.log(sequelize.query('SELECT LAST_INSERT_ID()'));

       return sequelize.query('ALTER TABLE people AUTO_INCREMENT=1');
    })

  }
};
