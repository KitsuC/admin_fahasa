const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {
  show(req, res, next) {
    res.render('admin');
  }
}

module.exports = new AdminController();
