const { mongo, Mongoose } = require("mongoose")

import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
 content:{
   type:String,
   required:true
 },
 complete:{
   type:Boolean,
   default:false
 },
 createdBy:{
   type: mongoose.Schema.Type.ObjectId,
   ref:"User"
 },
 subTodos:[{
   type:mongoose.Schema.Type.ObjectId,
   ref:"SubTodo"
 }]
},{timestamps:true})

export const Todos = mongoose.model("Todos",todoSchema)