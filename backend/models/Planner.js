import mongoose from "mongoose";

const plannerSchema = mongoose.Schema({
    plannerSubmit:{
        type: String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const PlannerSubmit = mongoose.model('planner', plannerSchema)

export default PlannerSubmit