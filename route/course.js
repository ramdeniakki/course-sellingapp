const Router  = require('express')

const courseRouter = Router();
const {courseModel} = require('../db')
courseRouter.post('/purchase',function(req,res){
    res.json({
        message:"Course Purchase End point"
    })
})


courseRouter.get('/preview',function(req,res){
    res.json({
        message:"Course preview End point"
    })
})


module.exports = {
    courseRouter
}