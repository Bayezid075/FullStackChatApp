const mongoose = require('mongoose')

const chatModel = mongoose.Schema({
 chatName : {type: String, trim: true },

 isGroupchat: { type: Boolean, default : false },
 Users : [{type:  mongoose.Schema.Types.ObjectId,
  ref: "Users",
}],
leatestMessage: {type:  mongoose.Schema.Types.ObjectId,
    ref: "Message",
},
groupAdmin: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: "Users",
}


},
{
    timestamps: true ,
}


);

const chatModels = mongoose.model ("chatmodel", chatModel)
module.export = chatModels