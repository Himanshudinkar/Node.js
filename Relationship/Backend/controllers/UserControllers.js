const UserModel = require("../model/UserModel")
const ProfileModel = require("../model/ProfileModel");



const datasev = async(req,res) =>{
    const {username, email, firstname, lastname} = req.body;

    const User = await UserModel.create({
        username:username,
        email:email
    })

    const Profile = await ProfileModel.create({
        firstname:firstname,
        lastname:lastname,
        userid:User._id
    })

    res.send("Data Sev")

}

const display = async(req,res) =>{
    const MyData = await ProfileModel.find().populate("userid")
    res.send(MyData)
}

module.exports = {
    datasev,
    display
}