
const express=require('express')
const userRouter=require('./routes/user.routes')
const app=express()
const indexRouter=require('./routes/index.routes')
app.set('view engine','ejs');
const dotenv=require('dotenv');
dotenv.config()
const connectToDB=require('./config/db')
connectToDB();
const cookieParser=require('cookie-parser')
app.use(cookieParser())

app.use(express.urlencoded({extended:true}));
app.use('/',indexRouter)
app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log("app is running at 3000 port")
})
