const express = require("express");
const { vehicleSubmission } = require("../controller/vehicalFormController");
const router = express.Router();
const upload = require("../middlewares/upload");

router.post("/vehicle-submission", upload.array("images"), vehicleSubmission);
module.exports = router;
