const mongoose = require("mongoose");
//require("../db").connect();

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
  catalogNumber: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
    // required: false,
  },
  category: {
    type: String,
  },
  inStock: {
    type: Number,
    required: true,
    default: 0,
  },
  isActive: { type: Boolean, default: true },
});

const itemModel = mongoose.model("Item", itemSchema);
module.exports = { itemModel };
// module.exports.userModel = userModel
