const jwt = require("jsonwebtoken");
const jwt_secret = process.env.jwt_secret;

function authenticateToken(req, res, next) {
  // const authHeader = req.headers['authorization'];
  // console.log(authHeader)
  // const token = authHeader && authHeader.split(' ')[1];

  // if (!token) return res.status(401).json({ message: 'Token missing' });

  // jwt.verify(token, process.env.jwt_secret, (err, user) => {
  //     if (err) return res.status(403).json({ message: 'Invalid token' });
  //     req.user = user;
  //     next();
  // });
  next();
}

module.exports = authenticateToken;
