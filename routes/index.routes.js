const express=require('express')
const router=express.Router()
const multer=require('multer')
const cloudinary=require('../config/cloudinary.config')
const upload=multer({dest:'uploads/'})
const fileModel=require('../models/files.model')
const authMiddleware=require('../middlewares/auth')

router.get('/home',authMiddleware,async(req,res)=>{
    try {
        const userFiles= await fileModel.find({
     user:req.user.userId
    })
    console.log(userFiles)
    res.render('home',{
        files:userFiles
    })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'server Error'
        })
    }
    
})

router.post('/upload',authMiddleware,upload.single('file'),async (req,res)=>{
    try{
   const result =await cloudinary.uploader.upload(req.file.path,{
    folder:'upload'
   });

    const newFile=await fileModel.create({
        path:result.secure_url,
        originalname:req.file.originalname,
        user:req.user.userId
    });
    res.json(newFile)
}catch(error){
     console.error('Cloudinary upload error:', error);
   res.status(500).json({message:'Upload failed',error});
}
    
})

router.get('/download/:id',authMiddleware,async(req,res)=>{
    const loggedInUserid=req.user.userId;
    const fileId=req.params.id;
    const file=await fileModel.findOne({
        user:loggedInUserid,
        _id:fileId
    })
    if(!file){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }
    console.log('hello',file.path)
    res.redirect(file.path)
})


module.exports=router;