const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const addController = require('../app/controllers/AddController');
const listController = require('../app/controllers/ListController');
const adminController = require('../app/controllers/AdminController');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/list', listController.show);
router.get('/list/:id/edit', listController.edit);
router.put('/list/:id', listController.update);
router.delete('/list/:id', listController.delete);
router.get('/add', addController.show);
router.post('/add', addController.up);
router.get('/', adminController.show);

module.exports = router;
