import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import connectDb from './db.js'
import Users from './models/Users.js'
import PlannerSubmit from './models/Planner.js'

const app = express() 

const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.get('/planner',async(req,res)=>{
    try{
        const plannerSubmit = await PlannerSubmit.find({})
        res.status(200).json(plannerSubmit)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
})

app.post('/planner', async(req,res)=>{
    try{
        const submitLooks = await PlannerSubmit.create(req.body)
        res.status(200).json(submitLooks)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
})


app.get('/about',async(req,res)=>{
    res.send('This is the about page')
})

app.get('/',async(req,res)=>{
    res.send('This is the homepage')
    
})
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

app.get("/login",async(req,res)=>{
    res.send("This is a login")

})


app.listen(port, ()=> console.log('Listening on port:' + port))

connectDb()