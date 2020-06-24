//controller function receive the client request
async function hiRequest(req, res) {
  let { id } = req.params; // destructuring parameter object
  console.log("parameter received ", id);
  res.send({
    message: "api " + id,
  });
}

async function sendRequest(req, res){
    res.send({
        data: req.body
    })
}

module.exports = {hiRequest, sendRequest} ;
