const mongoose = require("mongoose");

//require("../db").connect();

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: {
    type: String,
  },
  email: { type: String, unique: true },
  password: { type: String, required: true, select: false },
  gender: { type: String, enum: ["male", "female"], required: true },
  mobile: { type: String },
  address: {
    street: { type: String },
    houseNumber: { type: Number },
    city: { type: String },
  },
  permissionLevel: { type: String, enum: ["manager", "employee", "viewer"] },
  isActive: { type: Boolean, default: true },
  //token: { type: String, required: true, select: false },
  lastLogDate: { type: Date, default: Date.now },
  insertDate: { type: Date, default: Date.now, required: false },
});

const userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
// <=> module.exports.userModel = userModel;
