const Router = require('express')
const userRouter = Router()
const {userModel} = require('../db')
const jwt = require('jsonwebtoken')
const JWT_USER_PASSOWORDKEY = "testing_marco_dev_json_epic"
userRouter.post('/signup',async function(req,res){
    const {email,password,firstName,lastName} = req.body;

    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    res.json({
        message:"Successfully Signuped dude"
    })
})

userRouter.post('/signin', async function(req,res){
    const {email,password} = req.body;
    const response = await userModel.findOne({
        email:email,
        password:password
    })

    if(response){
        const token = jwt.sign({
            id:response._id.toString()
        },JWT_USER_PASSOWORDKEY)
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Invalid Token"
        })
    }
   
   
})

userRouter.post('/purchase',function(req,res){
    res.json({
        message:"Course endpoint"
    })
})


module.exports = {
    userRouter:userRouter
}