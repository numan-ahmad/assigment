const jwt = require("jsonwebtoken");
const config = require("../configs");

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Authentication token missing" });
  }

  const auth = token?.replace("Bearer ", "");
  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied. No token provided." });
  }
  jwt.verify(auth, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token." });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;
