require('dotenv').config()
const express  = require('express')
const app = express();
const mongoose = require('mongoose')
const {userRouter} = require('./route/user');
const {courseRouter} = require('./route/course')
const {adminRouter} = require('./route/admin')

app.use(express.json())
// Routing
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin',adminRouter)
app.use('/api/v1/course',courseRouter)

async function main () {
await mongoose.connect(process.env.MONGO_URL);
app.listen(3000);
console.log("App is listenig at the Point")
}

main();