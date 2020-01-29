'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderItens = sequelize.define('orderItens', {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      options: DataTypes.STRING,
      qtd: DataTypes.INTEGER,
      productExtraId: DataTypes.INTEGER
  }, {});
  orderItens.associate = function(models) {
    // associations can be defined here
  };
  return orderItens;
};