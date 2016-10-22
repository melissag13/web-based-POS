'use strict';
module.exports = function(sequelize, DataTypes) {
  var Receipt = sequelize.define('Receipt', {
    receipt_timestamp: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Receipt;
};