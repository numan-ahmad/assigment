const express = require("express");
const configValues = require("./server/configs/index.js");
const app = express();
const cors = require("cors");
const connectDB = require("./server/db/db.js");
const authRoute = require("./server/routes/auth-route.js")
const vehicleFormRoute = require("./server/routes/vehicle-form-route.js")
const path = require("path");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "./public")));
connectDB();

// Routes
app.use("/api/auth", authRoute);
app.use("/api", vehicleFormRoute);

app.listen(configValues.port, () => {
  console.log(`Server running at port: ${configValues.port}`);
});
