const Router  = require('express')

const courseRouter = Router();

courseRouter.post('/purchase',function(req,res){
    res.json({
        message:"Course Purchase End point"
    })
})


courseRouter.post('/preview',function(req,res){
    res.json({
        message:"Course preview End point"
    })
})


module.exports = {
    courseRouter
}