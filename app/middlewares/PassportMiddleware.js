/**
 * @description Uses passport.js to authenticate a user
 * 
 * @author
 * @version 1.0.0
 * @requires
 */

/** Dependencies */
const bcrypt = require('bcryptjs');
const passport = require('passport');
const passportLocal = require('passport-local');

const { User } = require('../database/models');

/** Setup Local Strategy */
passport.use(new passportLocal.Strategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, (req, username, password, done) => {
  process.nextTick(async () => {
    const user = await User.findOne({
      where: {
        username
      },
    });
    if (!user) {
      return done(null, false, req.flash('errorMessage', 'Seems you entered the wrong credential.'));
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, req.flash('errorMessage', 'Seems you entered the wrong credential.'));
    }
    return done(null, user);
  });
}));

/** Define how Passport should serialize a user */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/** Define how Passport should deserialize a user */
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

/**
* Initialize Passport on Express application
* 
* @param {Express} app The main Express app.
* @since 1.0.0
*/
const initialize = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
}

exports.initialize = initialize;
