const router = require("./router")

router.get("/api/hello-api/foo", (req, res)=>{
    res.send({
        message : "api route foo"
    })
})

module.exports = router