const { Sequelize } = require('sequelize');
const sequelize = require('../config/connection'); // Adjust path as per your project structure

// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Associations
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};

// // Initialize models
// const models = {
//   Product,
//   Category,
//   Tag,
//   ProductTag,
// };

// // Define associations (belongsTo, hasMany, belongsToMany) here

// module.exports = {
//   sequelize,
//   Sequelize,
//   ...models,
// };
