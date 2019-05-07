const express = require('express')

const app = express()

app.get('/', (req,res,next) =>{
    res.send("zhm-forum-DB")
})

const port = process.env.PORT || 9000
app.listen(port)