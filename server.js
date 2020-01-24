/**
 * @description Http Server
 * 
 * @author
 * @version 1.0.0
 */

/** Dependencies */
require('dotenv').config();
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
const cookieParser = require('cookie-parser');
const express = require('express');
const expressSession = require('express-session');
const path = require('path');

const PassportMiddleware = require('./app/middlewares/PassportMiddleware');
const router = require('./app/routes');

/** Instantiate Server */
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: 'session-secret',
  resave: false,
  saveUninitialized: true,
}));

/** Set view path and engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/** Passport Middleware Initialization */
PassportMiddleware.initialize(app);

app.use(connectFlash());

/** Setup Server Routes */
app.use(router);

/** Start Http Server */
app.listen(process.env.PORT || 3000);

module.exports = app;
