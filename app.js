const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

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