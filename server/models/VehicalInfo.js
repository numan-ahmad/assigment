const mongoose = require("mongoose");

const VehicalSchema = new mongoose.Schema(
  {
    carModel: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    maxPictures: {
      type: Number,
      required: true,
    },
    images: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VehicalInfo", VehicalSchema);
