'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vendor = sequelize.define('Vendor', {
    company_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Defines one to one relationship between employee and person
        // Source.belongsTo(Target) will add TargetID to Source model
        // This adds customer_id to vendor
        Vendor.belongsTo(models.Person);
        // Adds VendorID to Product
        Vendor.hasMany(models.Product);
      }
    }
  });
  return Vendor;
};