const { validationResult } = require('express-validator');

exports.isAuthenticated = (req, res, next) => {
	if(req.isAuthenticated()) {
		return next();
  }

	res.redirect('/login');
}

exports.checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  req.flash('errorMessage', errors.errors[0].msg);
  res.redirect(req.originalUrl);
}
