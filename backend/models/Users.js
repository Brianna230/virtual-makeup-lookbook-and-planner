import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required: true

    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Users = mongoose.model('users',userSchema)


export default Users