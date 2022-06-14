const mongoose = require("mongoose");
require("./user");
require("./item");

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
  items: [
    {
      itemId: { type: mongoose.SchemaTypes.ObjectId, ref: "Item" },
      qty: { type: Number, required: true, default: 1 },
    },
  ],
});

const orderModel = mongoose.model("order", orderSchema);
module.exports = { orderModel };
