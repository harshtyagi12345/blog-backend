const User = require("../models/user-model");
const Contact = require("../models/contact-model");




//getAlluser logic

const getAllusers =  async (req, res) =>  {
    try {
        const users = await User.find({}, { password : 0});
        if(!users || users.length === 0) {
            return res.status(400).json({message: "NO users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
      next(error);
      
    }
};

//single user logic

const getUserById = async (req, res) =>{
    try {
        const id = req.params.id;
        const data= await User.findOne({_id:id}, {password: 0});
        return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
}; 

//user delete logic
const deleteUserById = async (req, res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id });
        return res.status(200).json({message:"User Delete Successfully" });
    } catch (error) {
      next(error);
    }
}; 

//update logic
 const updateUserById = async(req, res) => {
    try {
       const id = req.params.id; 
       const updateUserByData = req.body;

       const updatedData =await User.updateOne ({ _id: id },
        {
          $set: updateUserByData,
       }
    );
    return res.status(200).json(updatedData);
    } catch (error) {
      next(error);
    }
 };

//getAllcontact logic
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        
        if(!contacts || contacts.length === 0) {
            return res.status(400).json({message: "No contacts found" });
    } 
            return res.status(200).json(contacts);
    }catch (error) {
      next(error);
    }
};


//contact  delete logic
const deleteContactById = async (req, res) =>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id });
        return res.status(200).json({message:"User Delete Successfully" });
    } catch (error) {
      next(error);
    }
};

module.exports = {getAllusers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById};