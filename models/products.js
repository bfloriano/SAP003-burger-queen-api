'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    category: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    products.hasMany(models.ordersItens)
    // associations can be defined here
  };
  return products;
};