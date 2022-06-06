const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const connectDb = require('./db')
const userRoute = require('./routes/userRoute')
connectDb();

app.use(express.json())
app.use("/api/users/", userRoute)

app.listen(port, () => console.log(`Server running on ${port}`));