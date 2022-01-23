const mongoose = require('mongoose')
// const { post } = require('../routes/posts')


const postSchema = new mongoose.Schema({
    title : {
        type : String ,
        required :true ,
        minlength : 5 ,
        maxlength : 50,
    },
    content : {
        type : String ,
        minlength : 10 ,
        maxlength : 2000,
    },
    createdAt :{
        type :Date ,
        default :Date.now ,
    }

})

// module.exports = post = mongoose.model('post' , postSchema)
module.exports = mongoose.model("Post" , postSchema);