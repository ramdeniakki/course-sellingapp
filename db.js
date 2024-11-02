const mongoose = require('mongoose');
const { string } = require('zod');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect("mongodb+srv://admin:admin%400701@cluster0.xujxl.mongodb.net/Course-selling-app-database");

const userSchema = new Schema({
    id:ObjectId,
    email:String,
    password:String,
    firstName:String,
    lastName:String


});

const adminSchema = new Schema({
    id:ObjectId,
    email:{type:string , unique:true},
    password:String,
    firstName:String,
    lastName:String

});

const courseSchema = new Schema({

    id:ObjectId,
    email:{type:string , unique:true},
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