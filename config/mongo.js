const mongoose = require("mongoose");

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err,res)=>{
        if(!err){
            console.log('++++++CONECTED TO DATABASE++++++');
            return;
        }
        console.log('++++++CAN NOT CONNECT TO DB++++++');
    });
};

module.exports = dbConnect;

