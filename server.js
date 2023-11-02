const express=require("express");

require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/connectDB");
const User = require("./model/User");
const app=express();
app.use(express.json());
connectDB()
app.post("/add",async(req,res)=>{
    const {fullName,email,phone,age}=req.body;
    try {
        const newUser=new User({
         fullName,
         email,
         phone,
         age
        });
        await newUser.save();
        res.send(newUser);
        console.log(newUser);
    } catch (error) {
       console.log(error.message) 
    }
});
app.get("/get",async(req,res)=>{
  const users=await User.find();
  res.send(users);

});   
app.get("/get/:id",async(req,res)=>{
const user=await User.findById(req.params.id);
res.send(user);
}) ;
app.put("/put/:id",async(req,res)=>{
    try {
        const editUser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
        res.send(editUser);

    } catch (error) {
      console.log(error.message)  
    }
});
app.delete("/delete/:id",async(req,res)=>{
  try {
    const delUser=await User.findByIdAndDelete(req.params.id);
res.send("user deleted");
  } catch (error) {
    console.log(error.message);
  }  
})







const PORT=process.env.PORT||4000;
app.listen(PORT,(err)=>err
?console.log(err)
:console.log(`server is successfuly runing on PORT ${PORT}`));