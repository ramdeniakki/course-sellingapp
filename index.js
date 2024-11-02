const express  = require('express')
const app = express();

const {userRouter} = require('./route/user');
const {courseRouter} = require('./route/course')
const {adminRouter} = require('./route/admin')

// Routing
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin',adminRouter)
app.use('/api/v1/course',courseRouter)

app.listen(3000);