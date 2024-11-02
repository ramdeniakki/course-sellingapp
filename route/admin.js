const Router = require('express')
const adminRouter =  Router();


adminRouter.post('/signup',function(req,res){
    res.json({
        message:"admin signup successful"
    })
})

adminRouter.post('/signin',function(req,res){
    res.json({
        message:"admin signin Successful"
    })
})

adminRouter.put('/course',function(req,res){
    res.json({
        message:"Admin course end point"
    })
})
adminRouter.get('/course',function(req,res){
    res.json({
        message:"Admin course view point"
    })
})

module.exports = {
    adminRouter
}