const express = require('express')
const index = express()
const cors = require('cors')
const bodyParser = require('body-parser')


index.get('/todolist',(req,res) =>{
     
    res.json({message: 'Working'})
})





index.listen(3000,() => {
    console.log('server')
})
