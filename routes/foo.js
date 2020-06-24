const router = require("./router")

//here access to properties with destructuring of the object
// received from require
const { hiRequest, sendRequest } = require("../controllers/myController")

router.get("/api/hello-api/foo", (req, res)=>{
    res.send({
        message : "api route foo"
    })
})

router.get("/api/:data", (req, res)=>{
    let { data } = req.params // destructuring parameter object
    console.log("parameter received ",  data)
    res.send({
        message : "api route foo" + data
    })
})

//router exec controller received
router.get("/api/v2/:id", hiRequest)
router.post("/api/v2", sendRequest)

module.exports = router