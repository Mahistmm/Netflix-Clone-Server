const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(401).json({ msg: "Is not authorized" });
      } else {
        req.user = user;
        next();
      }
    });
  }
};

module.exports = verifyToken;
