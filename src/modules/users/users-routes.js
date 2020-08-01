//call router object created
const router = require("../../../routes/router");
const { getAllUsers } = require("./users-controllers");

//exec controller in router
router.get("/api/get-users", getAllUsers);

module.exports = router;
