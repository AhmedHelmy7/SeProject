var mongoose= require('mongoose')
let registeredUserSchema=mongoose.Schema({
    name: {
        type:String
    }
  
})
var RegisteredUser = mongoose.model("registeredUser",registeredUserSchema)

module.exports=RegisteredUser;