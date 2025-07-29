const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1:27017/mern_admin";
//mongoose.connect(URL);
const URI = process.env.MONGO_URI;

const connectDb = async () => {
    try{
    console.log(URI);
     await mongoose.connect(URI)
     console.log("connection successful to DB");
    }catch (error){
        console.error("database connection failed", error);
        process.exit(0);
    }
};

module.exports = connectDb;