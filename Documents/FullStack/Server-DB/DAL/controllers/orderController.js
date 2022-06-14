/************** Temp *************/
require("../db").connect();
/***************************/

const { orderModel } = require("../models/order");
const mongoose = require("mongoose");

async function create(data) {
  return await orderModel.create(data);
}
async function read(filter) {
  return await orderModel
    .find(filter)
    .populate("userId")
    .populate("items.itemId");
}
async function readOne(filter) {
  return await orderModel.findOne(filter);
}
async function updateOne(filter, newData) {
  return await orderModel.updateOne(filter, newData);
}
async function updateMany(filter, newData) {
  return await orderModel.updateMany(filter, newData);
}

module.exports = {
  create,
  read,
  readOne,
  updateOne,
  updateMany,
};
