'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersItens = sequelize.define('ordersItens', {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
  }, {});
  ordersItens.associate = function(models) {
    // associations can be defined here
  };
  return ordersItens;
};