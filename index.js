const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:"hii backedn"
    })
})

app.listen(3000)