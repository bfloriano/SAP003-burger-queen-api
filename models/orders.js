'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
      clientName: DataTypes.STRING,
      status: DataTypes.STRING,
      tableId: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
      orders.hasMany(models.ordersItens)
      orders.belongsTo(models.table)
  };
  return orders;
};