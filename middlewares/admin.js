const { JWT_ADMIN_PASSOWORDKEY } = require("../config")

function adminMiddleWare(req,res,next){
    const token = req.headers.token
    const decodedToken = jwt.verify(token,JWT_ADMIN_PASSOWORDKEY);
    if(decodedToken){
     req.userId = decodedToken.id
     next(); 
    }else{
        res.status(403).json({
            message:"you are not signed in"
        })
    }
 } 

 module.exports = {
    adminMiddleWare:adminMiddleWare
 }