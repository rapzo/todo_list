const jwt = require('jsonwebtoken');

const SECRET = '123456';

exports.login = function (user) {
  return jwt.sign({
    id: user._id,
    email: user.email,
    name: user.name
  }, SECRET);
};

exports.authentication = function authentication() {
  return function auth(req, res, next) {
    console.log(req.headers);

    try {
      const data = jwt.verify(req.headers['authorization'].split(' ')[1], SECRET);

      req.user = data;

      return next();
    } catch (e) {
      return res.status(401).json({
        error: e.message,
      });
    }
  }
}