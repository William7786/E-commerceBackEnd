// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo (Category)

Categories.hasmany (Products)

Products.belongToMany (Tag, {through:ProductTag})

Tags.belongToMany (Products, {through:ProductTag})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
