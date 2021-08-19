const express = require('express')
const app = express()
const router = require('./routes/router')
app.use('/api',router)
app.use(express.json())
app.listen(4777,()=>{
    console.info(`server running on port 4777`)
})
