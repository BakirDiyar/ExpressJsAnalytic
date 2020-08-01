const { getUsers } = require("./users-services");

//controller receive request of client
async function getAllUsers(req, res) {
  const data = await getUsers()
  res.status(data.status).send(data);
}

module.exports = { getAllUsers };
