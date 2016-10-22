'use strict';
module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    salary: DataTypes.FLOAT,
    role: DataTypes.STRING,
    is_hourly: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Defines one to one relationship between employee and person
        // Source.belongsTo(Target) will add TargetID to Source model
        // This adds customer_id to employee
        Employee.belongsTo(models.Person);
      }
    }
  });
  return Employee;
};