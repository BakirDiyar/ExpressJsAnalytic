const mongoose = require('mongoose');
const { Schema }  = mongoose

const user = new Schema({
    name : {type: String, required: true}
},
{timestamps:{createdAt:'createAt', updatedAt:'updateAt'}}
)

module.exports =  mongoose.model('Users', user)