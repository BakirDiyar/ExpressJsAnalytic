let users = [
  {
    name: "Diyar",
    email: "diyar@gmail.com",
    pass: "eng1",
  },
];

async function usersMock() {
  return users;
}

module.exports = { usersMock };
