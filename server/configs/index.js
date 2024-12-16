require("dotenv").config();
const config = {
  port: 8000,
  expiresIn: "1d",
  frontend_url: process.env.FRONTEND_URL,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.MY_SECRET_KEY,
};

module.exports = config;
