const express = require("express")
const router = express.Router()

router.get("/hello-api", (req, res)=>{
    res.send({
        message : "api route"
    })
})

module.exports = router