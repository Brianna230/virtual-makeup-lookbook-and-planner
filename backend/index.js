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

app.get('/planner/:id',async(req,res)=>{
    try{
        console.log(req.params)
        const plannerSubmit = await PlannerSubmit.find({userId:req.params.id})
        res.status(200).json(plannerSubmit)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
})

app.post('/planner', async(req,res)=>{
    try{
        console.log(req.body.plannerSubmit)
        const submitLooks = await PlannerSubmit.create(req.body.plannerSubmit)
        res.status(200).json(submitLooks)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
})

app.delete('/planner/:id', async(req,res)=>{
    try{
         const response = await PlannerSubmit.findByIdAndDelete(req.params.id)
         console.log(response)
         if(!response) {return res.status(404).json({message:'Item not found'})}
         res.status(200).json({message:'Deleted successfully'})
    }catch(e){
        console.log(e)
        res.status(500).json(e)

    }
})

app.put('/planner/:id', async(req,res)=>{
    try{
        const responseUpdate = await PlannerSubmit.findById(req.params.id)
        if(!responseUpdate){
            return res.status(404).json({error:"Planner item not found"})
        }
    if(req.body.plannerSubmit){
        responseUpdate.plannerSubmit = req.body.plannerSubmit
    }
        responseUpdate.update = !responseUpdate.update;
        await responseUpdate.save()
        res.json({message:"Planner item update", data: responseUpdate})
    }catch(e){
        console.log(e)
        res.json(e)
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



app.post("/login",async(req,res)=>{
    try{
        console.log(req.body)
        const {username,password} = req.body
        const user = await Users.findOne({username})
        if(!user){
            return res.status(401).json({message:'Invalid username or password'})
        }
        res.status(200).json({id:user._id})
    }catch(e){
        console.log(e)
        res.status(500).json(e)

    }
})

app.listen(port, ()=> console.log('Listening on port:' + port))

connectDb()