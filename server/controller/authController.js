const config = require("../configs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const jwtSecret = config.jwtSecret;
    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "1d",
    });
    res.status(200).json({
      message: "User login successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  login,
};
