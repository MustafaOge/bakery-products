// contactModel.js
var mongoose = require('mongoose');
// mongo db modellemek için
// Setup schema

var postSchema = mongoose.Schema({
    title: {
        type: String,
             required: true
         },
  
   subtitle: {
       type: String,
       required: true
   },
    content:{
        type: String,  
        required: true
   },
    tag: { 
        type:String
   },
    image: {
         type: String,
         required:false

    },
    createdAt:{
        type:Date, 
        default: new Date(),
    },
},
    {
        versionKey: false,
    }    
);
var Post = module.exports = mongoose.model('post', postSchema);


module.exports.get = async function (callback, limit) {
    await Post.find(callback).limit(limit);

}
