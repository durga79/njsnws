const mongoose=require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/NewSample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
{
    console.log("Database Connected Sucessfully");
}).catch((err)=>
{
    console.log(err);
})

const student=mongoose.Schema({
    name:String,
    age:Number,
    pass:Boolean   
})

const Student=mongoose.model("Student",student);
const adder=async()=>{
    const ss=new Student({
    name:"Nani",
    age:22,
    pass:true
})
await ss.save();
}
adder();
