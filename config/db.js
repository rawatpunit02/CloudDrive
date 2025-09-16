const mongoose=require('mongoose')

function connectionToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('connected to DB')
    })
}

module.exports=connectionToDB