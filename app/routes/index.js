/**
 * @description API Routes
 * 
 * @author
 * @version 1.0.0
 */

 /** Dependencies */
 const passport = require('passport');

 const AppMiddleware = require('../middlewares/AppMiddleware');

// Routers
const router = require('express').Router();

// Validator Middlewares
const AuthValidator = require('../middlewares/validators/AuthValidator');

// Controllers
const AuthController = require('../controllers/AuthController');
const MainController = require('../controllers/MainController');

router.get('/login', AuthController.showLoginPage);
router.get('/register', AuthController.showRegisterPage);
router.get('/logout', AuthController.logout);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/main',
  failureRedirect: '/login',
  successFlash: true,
}));
router.post('/register', AuthValidator.register, AuthController.register);

router.use(AppMiddleware.isAuthenticated);

router.get('/main', MainController.showMainPage);

module.exports = router;
