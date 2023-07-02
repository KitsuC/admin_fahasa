var multer = require('multer');
const Account = require('../models/Account');

class LoginController {
  show(req, res) {
    res.render('login');
  }

  async get(req, res) {
    try {
      const check = await Account.findOne({
        Account: req.body.account,
      });
      if (check.Password === req.body.password) {
        res.redirect('/admin');
      } else {
        res.send('Sai mật khẩu');
      }
    } catch {
      res.send('Sai tài khoản vui lòng kiểm tra lại!');
    }
  }
}

module.exports = new LoginController();
