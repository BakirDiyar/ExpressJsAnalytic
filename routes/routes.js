const express = require("express")
const router = express.Router()
const auth = require("../middlewares/mid")

router.get("/hello-api", auth, (req, res)=>{
    console.log(auth)
    res.send({
        message : "api route"
    })
})

module.exports = router