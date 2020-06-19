const router = require("./router")

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

module.exports = router