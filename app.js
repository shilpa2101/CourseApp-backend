const express = require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {coursemodel}=require("./models/course")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://shilpa:shilpa123@cluster0.qb2ryzy.mongodb.net/courseapp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    // res.send("success")
    // console.log(input)

    let course=new coursemodel(input)
    console.log(course)
    // res.send("model passing success")

    course.save()

    res.json({"status":"success"})   
   
})


app.post("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.post("/search",(req,res)=>{
    res.send("welcome to my contact page")
})

app.post("/delete",(req,res)=>{
    res.send("test")
})

app.listen(8084,()=>{
    console.log("server started")
})