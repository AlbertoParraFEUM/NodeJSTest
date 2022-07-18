const mongoose = require('mongoose')

const trackScheme = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        album:{
            type:String,
        },
        cover:{
            type:String,
            validate:{
                validator: (req) =>{
                    return true;
                },
                message: "Error URL",
            },
        },
        artist:{
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nacionality:{
                type:String,
            },
        },
        duration:{
            start:{
                type:Number,
            },
            end:{
                type:Number,
            },
        },
        mediaId:{
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps:true,  //TODO createdAt, updateAt
        versionKey:false
    }
);

module.exports = mongoose.model("tracks", trackScheme)