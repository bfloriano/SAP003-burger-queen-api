'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('table', {
      number: DataTypes.INTEGER
  }, {freezeTableName: true,});
  table.associate = function(models) {
      table.hasMany(models.orders)
  };
  return table;
};