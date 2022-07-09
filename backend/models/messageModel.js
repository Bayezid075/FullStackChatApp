const mongoose = require('mongoose')

const messageModel = mongoose.Schema({

    sender: {type: mongoose.Schema.Types.ObjectId, ref: "Users"},
    sender: {type:String},
    content : {type: mongoose.Schema.Types.ObjectId, ref: "chat"}
},
{
    timestamp : true ,
}
)

const message = mongoose.model("messagemodel",messageModel)
module.exports = message