const { usersMock } = require("./mocks/users-mocks");
//const { _findUsers } = require("./users-models")
let  io  = require("../../helpers/socket").io
//let io = getIo()

//service business logic
async function getUsers() {
  let resp = {
    status: 402 ,
    message: "users not found",
    data: { users: [] },
  };


  try {
 //   let users = ([] = await _findUsers());
    let users = []
    if (users && users.length) {
      resp.status  = 200;
      resp.message = 'Get users successfull'
      resp.data.users = users;
    }
    console.log(io);
    //io.getIo().emit('data', {data: 1})
    io.emit('data', {data: 1})
  
  } catch (error) {
    console.log('err ', error);

    resp.status = 503;
    resp.message = "Hubo un problema al obtener los usuarios.....";
  }

  return resp;
}

module.exports = { getUsers };
