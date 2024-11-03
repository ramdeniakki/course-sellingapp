const mongoose = require('mongoose');
const { string } = require('zod');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const userSchema = new Schema({
    id:ObjectId,
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String


});

const adminSchema = new Schema({
    id:ObjectId,
    email: {type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String

});

const courseSchema = new Schema({

    id:ObjectId,
    description:String,
    imageUrl:String,
    price:Number,
    CreatorId:ObjectId

});

const purchaseSchema = new Schema({
    courseId:ObjectId,
    userId:ObjectId

})


const userModel = mongoose.model('user',userSchema);
const adminModel = mongoose.model('admin',adminSchema)
const courseModel = mongoose.model('course',courseSchema)
const purchaseModel = mongoose.model('purchase',purchaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}