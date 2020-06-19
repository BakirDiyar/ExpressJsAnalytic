const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const router = express.Router()
const route = require("./routes/routes")

//middlewares of express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
app.use(router)
app.use("/api", route) // call routes all in index
app.use(require("./routes/index")) //call route single

//middleware express for all routes
app.use("*", (req, res, next)=>{
    req.user = "Diyar Bakir"
    next()
})

router.get("/foo/:data", (req, res)=> {
    let param = req.params // get parameter object                     
    res.send({
        message: "bar number " + param.data
    })
})

app.get("/api", (req, res)=>{
    let { name } = req.query // destructuring query param object
    name = name? name : "Bakir"
    console.log("request ", req.get("authorization")) //access to header propertie
    res.send({
        message : "my name is : "+ req.user // get new propertie passed for request from middleware
    })
})

async function server(){
    await app.listen("3000")
    console.log("server running")
}

server()
