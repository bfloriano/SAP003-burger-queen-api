'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
      clientName: DataTypes.STRING,
      status: DataTypes.STRING,
      tableNumber: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
      orders.hasMany(models.orderItens)
    // associations can be defined here
  };
  return orders;
};