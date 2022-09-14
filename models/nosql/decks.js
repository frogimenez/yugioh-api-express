const mongoose = require("mongoose");

const DeckSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        list:{
            type:Array
        },
    },
    {
        timestamps:true, //TODO createdAT, updatedAt
        versionKe:false
    }
);

module.exports = mongoose.model("Deck", DeckSchema)