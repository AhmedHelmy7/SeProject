var mongoose= require('mongoose')
var Schema = mongoose.Schema;
let activitySchema=mongoose.Schema({
    activityName: {
        type:String
    },
    avgRating:{
        type:Number
    },
    ratings:[{
        type:Schema.ObjectId,
        ref:'rating' //could be like this or ratingSchema
    }]
        
    
})

var Activity = mongoose.model("activity",activitySchema)

module.exports=Activity;