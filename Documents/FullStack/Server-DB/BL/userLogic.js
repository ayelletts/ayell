const userConroller = require("../DAL/controllers/userController");

let user1 = {
  firstName: "Esti",
  lastName: "Lauder",
  email: "lauderE@gmail.com",
  password: "112233",
  gender: "female",
  mobile: "0503334445",
  address: {
    street: "kenedi",
    houseNumber: 123,
    city: "London",
  },
};

async function getUserDetailsById(id) {
  //find
  userController.readOne(id);
  //check if null or exist
  //return error/user
}

async function register() {
  // validations
}
