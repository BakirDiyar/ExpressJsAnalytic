const users = require("./schemas/users-schema");

async function _findUsers() {
  return await users.find({}).exec();
}

module.exports = { _findUsers };
