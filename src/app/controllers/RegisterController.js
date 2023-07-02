var multer = require('multer');
const Account = require('../models/Account');

class RegisterController {
  show(req, res) {
    res.render('register');
  }

  async get(req, res) {
    const data = {
      Account: req.body.account,
      Password: req.body.password,
    };

    await Account.insertMany([data]);

    res.render('./admin/login');
  }
}

module.exports = new RegisterController();
