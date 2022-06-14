const { itemModel } = require("../models/item");

async function create(data) {
  return await itemModel.create(data);
}
async function read(filter) {
  return await itemModel.find(filter);
}
async function readOne(filter) {
  return await itemModel.findOne(filter);
}
async function updateOne(filter, newData) {
  return await itemModel.updateOne(filter, newData);
}
async function updateMany(filter, newData) {
  return await itemModel.updateMany(filter, newData);
}
async function deleteOne(filter) {
  //first check if item exist in orders
  return await updateOne(filter, { isActive: false });
}
async function deleteMany(filter) {
  //first check if item exist in orders
  return await updateMany(filter, { isActive: false });
}

module.exports = {
  create,
  read,
  readOne,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
};
