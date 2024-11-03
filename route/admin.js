const Router = require('express')
const adminRouter =  Router();
const jwt = require('jsonwebtoken')
const {JWT_ADMIN_PASSOWORDKEY} = require('../config')
const {adminModel, courseModel} = require('../db')
const {adminMiddleware} = require('../middlewares/admin');
adminRouter.post('/signup',async function(req,res){
  const {email,password,firstName,lastName} = req.body

   await adminModel.create({
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName
  })
  res.json({
    message:"Admin Signup Successful"
  })
})

adminRouter.post('/signin', async function(req,res){

    const {email,password} = req.body;

    const admin = await adminModel.findOne({
        email:email,
        password:password
    })

    if(admin){
      const token = jwt.sign({
            id:admin._id.toString()
        },JWT_ADMIN_PASSOWORDKEY)
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Invalid Token"
        })
    }
   
})

adminRouter.post('/course', adminMiddleware, async function(req,res){
    const adminId = req.userId;
    const {title,description,imageUrl,price,creatorId} = req.body
    await courseModel.create({
        title,description,imageUrl,price,creatorId:adminId
    })
    res.json({
        message:"Course Created",
        creatorId:adminId
    })
    
})
adminRouter.get('/',function(req,res){
    res.json({
        message:"Admin course view point"
    })
})

module.exports = {
    adminRouter
}