const mongoose=require('mongoose')


const fileSchema=mongoose.Schema({
    path:{
        type:String,
        required:[true,'path is required']
    },
    originalname:{
        type:String,
        required:[true,'originalname is must required']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'User is required']
    }
})

const file =mongoose.model('file',fileSchema)

module.exports=file;