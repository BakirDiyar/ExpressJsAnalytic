
function auth(req,res,next){
    if(req.get("authorization")){
        next()
    }else{
        res.send({
            message: "access denied"
        })
    }
}

module.exports = auth // export only auth function
//module.exports = { auth }  export object with propertie auth function