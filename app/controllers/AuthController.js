/**
 * @description Auth Controller
 * 
 * @author
 * @version 1.0.0
 */

/** Dependencies */
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const { User } = require('../database/models');

/**
 * @description Show Login Page
 * 
 * @since 1.0.0
 */
exports.showLoginPage = async (req, res) => {
  res.render('login.ejs', {
    errorMessage: req.flash('errorMessage'),
    successMessage: req.flash('successMessage'),
  });
}

/**
 * @description Show Register Page
 * 
 * @since 1.0.0
 */
exports.showRegisterPage = async (req, res) => {
  res.render('register.ejs', {
    errorMessage: req.flash('errorMessage'),
    successMessage: req.flash('successMessage'),
  });
}

/**
 * @description Register
 * 
 * @since 1.0.0
 */
exports.register = async (req, res) => {
  const reqData = _.pick(req.body, ['username', 'password', 'musicAnswer', 'sex']);
  reqData.password = bcrypt.hashSync(reqData.password, 10);
  reqData.sex = !!reqData.sex;
  const user = await User.findOne({
    where: {
      username: reqData.username
    },
  });
  if (user) {
    req.flash('errorMessage', 'Username is already in use.');
    res.redirect('/register');
    return;
  }
  await User.create(reqData);
  req.flash('successMessage', 'User has been created. Please login');
  res.redirect('/login');
}

/**
 * @description Logout
 * 
 * @since 1.0.0
 */
exports.logout = async (req, res) => {
  req.logout();
  res.redirect('/login');
}
