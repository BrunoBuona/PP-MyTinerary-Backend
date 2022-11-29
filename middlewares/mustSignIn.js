const mustSignIn = require("../config/responses");

function mustSignin(req, res, next) {
  if (req.user) {
    return next();
  }
  return mustSignIn();
}
module.exports = mustSignin;