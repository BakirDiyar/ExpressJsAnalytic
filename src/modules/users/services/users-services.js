const { usersMock } = require("../mocks/users-mocks");

//service business logic
async function getUsers() {
  let resp = {
    status: true,
    message: "get users successfull",
    data: { users: [] },
  };

  try {
    let users = ([] = await usersMock());

    if (users && users.length) {
      resp.data.users = users;
    }
  } catch (error) {
    resp.status = false;
    resp.message = "Hubo un problema al obtener los usuarios.....";
  }

  return resp;
}

module.exports = { getUsers };
