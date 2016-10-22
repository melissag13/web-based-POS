'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    cost: DataTypes.FLOAT,
    sku: DataTypes.STRING,
    upc: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // A product has one vendor
        // This adds a vendor_id to the product table
        Product.belongsTo(models.Vendor);
      }
    }
  });
  return Product;
};