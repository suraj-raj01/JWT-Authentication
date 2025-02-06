const UserModel = require("../models/userModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registration=async(req,res)=>{
    const {name,phone,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 8)
    try {
     await UserModel.create({
        name:name,
        phone:phone,
        email:email,
        password:hashedPassword
     })
     res.status(200).json("Registration successfull!!")
   } catch (error) {
     res.status(400).json({msg:"Something went wrong"})
   }
}

const userLogin=async(req,res)=>{
  const{email,password} = req.body;
  try {
    const User = await UserModel.findOne({email:email});
    if(!User){
      res.status(400).json({msg:"Invalid EmailId"})
    }
    const isMatch = await bcrypt.compare(password, User.password);
    if(!isMatch){
      res.status(400).json({msg:"Invalid Password"})
    }
    const token = jwt.sign({ userId: User._id }, process.env.SECRET_KEY, {
      expiresIn: 3*24*60*60,
    });
    res.status(200).json({token:token});
  } catch (error) {
    res.status(400).json({msg:"Login Failed!!"});
  }
}

const userAuth=async(req,res)=>{
  const token = req.header("auth-token");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.userId);
    res.send(user)
  } catch (error) {
    res.status(400).send({msg:"Something went wrong!!!"})
  }
}

module.exports = {
registration,
userLogin,
userAuth
}