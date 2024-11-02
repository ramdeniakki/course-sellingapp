const Router = require('express')
const userRouter = Router()
const {userModel} = require('../db')

userRouter.post('/signup',function(req,res){
    res.json({
        message:"User signup successful"
    })
})

userRouter.post('/signin',function(req,res){
    res.json({
        message:"User signin Successful"
    })
})

userRouter.post('/purchase',function(req,res){
    res.json({
        message:"Course endpoint"
    })
})


module.exports = {
    userRouter:userRouter
}