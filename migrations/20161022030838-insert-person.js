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
        {first_name: "Melissa", last_name: "Garcia", street: "123 Somewhere St", city: "St Cloud", state: "FL", zip: "33333", phone: "1234567890", email: "melissag13@gmail.com"},
        {first_name: "Kristi", last_name: "Heredia", street: "123 Somewhere St", city: "Clermont", state: "FL", zip: "33333", phone: "1234567890", email: "froglander@dukworld.net"},
        {first_name: "Kai", last_name: "Zhong", street: "123 Somewhere St", city: "Orlando", state: "FL", zip: "33333", phone: "1234567890", email: "huikaizhong@gmail.com"},
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
  }
};
