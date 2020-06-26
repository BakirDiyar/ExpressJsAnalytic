const { getUsers } = require("../services/users-services");

//controller receive request of client
async function getAllUsers(req, res) {
  res.send(await getUsers());
}

module.exports = { getAllUsers };
