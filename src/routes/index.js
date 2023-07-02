const adminRouter = require('./admin');
const loginRouter = require('./login');
const registerRouter = require('./register');
const express = require('express');

function route(app) {
  app.use(express.urlencoded({ extend: false }));

  app.use('/register', registerRouter);
  app.use('/admin', adminRouter);
  app.use('/', loginRouter);
}

module.exports = route;
