const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        cardType:{
            type:String
        },
        attack:{
            type:Number,
            
        },
        Defense:{
            type:Number
        },
        idCard:{
            type:Number
        },
        level:{
            type:Number
        },
        rarity:{
            type:String
        }
    },
    {
        timestamps:true, //TODO createdAT, updatedAt
        versionKe:false
    }
);

module.exports = mongoose.model("Users", UserSchema)