const _ = require('lodash');
const { body } = require('express-validator');

const { checkValidationErrors } = require('../AppMiddleware');

const routesValidator = {
  register: [
    body('username')
      .not().isEmpty().withMessage('Username is missing.'),
    body('password')
      .not().isEmpty().withMessage('Password is missing.')
      .isLength({ min: 6 }).withMessage('Password should be at least 6 characters.'),
  ],
};

_.forEach(routesValidator, (routeValidator) => {
  routeValidator.push(checkValidationErrors);
});

module.exports = routesValidator;
