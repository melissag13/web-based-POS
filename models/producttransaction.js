'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProductTransaction = sequelize.define('ProductTransaction', {
    quantity: DataTypes.INTEGER,
    transaction_price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Define many to many relationship between productiontransaction and receipt
        ProductTransaction.hasOne(models.Receipt, {through: 'ProductTransaction_Receipt'});
        // Define one to one relationship between productiontransaction and product
        ProductTransaction.hasOne(models.Product);
      }
    }
  });
  return ProductTransaction;
};