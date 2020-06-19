const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const router = express.Router()
const route = require("./routes/routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
app.use(router)
app.use("/api", route) // call routes all in index

app.use(require("./routes/index")) //call route single

router.get("/foo", (req, res)=> {
    res.send({
        message: "bar"
    })
})

app.get("/api", (req, res)=>{
    res.send({
        message : req.message
    })
})

async function server(){
    await app.listen("3000")
    console.log("server running")
}

server()
