const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');

router.get('/', loginController.show);
router.post('/', loginController.get);

module.exports = router;
