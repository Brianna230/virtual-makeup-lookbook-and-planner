import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import connectDb from './db.js'
import Users from './models/Users.js'

const app = express() 

const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.get('/signup',async(req,res)=>{
    try{
        const users = await Users.find({})
        res.status(200).json(users)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
})

app.post('/signup', async(req,res)=>{
   try{
    const user = await Users.create(req.body)
    res.status(200).json(user)
   }catch(e){
    console.log(e)
    res.status(400).json(e)
   }
   
})


app.listen(port, ()=> console.log('Listening on port:' + port))

connectDb()