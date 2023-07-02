var mongoose = require('mongoose');

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

var schemaProduct = new mongoose.Schema(
  {
    Name: String,
    Image: String,
    PriceN: String,
    PriceO: String,
    Author: String,
    Company: String,
    Supplier: String,
    Cover: String,
    Type: { type: String, required: true },
    Slug: { type: String, slug: 'Name', unique: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Product', schemaProduct);
