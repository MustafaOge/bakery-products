var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({

   nameSurname :{
         type: String,
        required: true,
   },

    email :{   
         type: String,
         required: true,
    }, 

    subject :{  
        type: String,   
        required: true, 
    },

    message :{  
        type: String,       
         required: true, 
    },  
    

},

{    versionKey: false 
})

var FeedBack = module.exports = mongoose.model('feedBack', feedbackSchema,);


module.exports.get = async function (callback, limit) {
    await FeedBack.find(callback).limit(limit);

}