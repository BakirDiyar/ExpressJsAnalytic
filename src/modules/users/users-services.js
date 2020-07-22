const { usersMock } = require("./mocks/users-mocks");
const { _findUsers } = require("./users-models")
//service business logic
async function getUsers() {
  let resp = {
    status: 402 ,
    message: "users not found",
    data: { users: [] },
  };

  try {
    let users = ([] = await _findUsers());

    if (users && users.length) {
      resp.status  = 200;
      resp.message = 'Get users successfull'
      resp.data.users = users;
    }
  } catch (error) {
    resp.status = 503;
    resp.message = "Hubo un problema al obtener los usuarios.....";
  }

  return resp;
}

module.exports = { getUsers };
