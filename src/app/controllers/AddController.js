var multer = require('multer');
const Product = require('../models/Product');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/VsCode/Fahasha-Full/src/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log(file, 'hi');
    if (
      file.mimetype == 'image/bmp' ||
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/gif'
    ) {
      cb(null, true);
    } else {
      return cb(new Error('Only image are allowed!'));
    }
  },
}).single('txtImg');

class AddController {
  show(req, res, next) {
    res.render('add');
  }
  up(req, res) {
    // res.render('/add');
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        res.json({ kq: 0, errMsg: 'A Multer error occurred when uploading.' });
      } else if (err) {
        res.json({
          kq: 0,
          errMsg: 'An unknown error occurred when uploading.!' + err,
        });
      } else {
        var product = Product({
          Name: req.body.txtName,
          Image: `/public/upload/${req.file.filename}`,
          PriceN: req.body.txtPriceN,
          PriceO: req.body.txtPriceO,
          Author: req.body.txtAuthor,
          Company: req.body.txtCpn,
          Supplier: req.body.txtSupplier,
          Cover: req.body.txtCv,
          Type: req.body.txtType,
        });

        product
          .save()
          .then(() => {
            res.json(req.body);
          })
          .catch((err) => {
            res.json({ kq: 1 });
          });
      }
    });
  }
}

module.exports = new AddController();
