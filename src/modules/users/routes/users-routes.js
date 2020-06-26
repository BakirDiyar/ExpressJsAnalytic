//call router object created
const router = require("../../../../routes/router");
const { getAllUsers } = require("../controllers/users-controllers");

//exec controller in router
router.get("/api/get-users", getAllUsers);

module.exports = router;
