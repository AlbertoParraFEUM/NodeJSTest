const mongoose = require('mongoose')

const storageScheme = new mongoose.Schema(
    {
        url:{
            type:String,
        },
        filename:{
            type:Number,
        }
    },
    {
        timestamps:true,  //TODO createdAt, updateAt
        versionKey:false
    }
);

module.exports = mongoose.model("storages", storageScheme)