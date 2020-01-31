'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersItens = sequelize.define('ordersItens', {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      qtd: DataTypes.INTEGER
  }, {});
  ordersItens.associate = function(models) {
    ordersItens.belongsTo(models.products)
  };
  return ordersItens;
};