const mongoose = require("mongoose");

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser:true, 
        useUnifiedTopology: true,
    }, (err, res) =>{
        if(!err){
            console.log('Conexión correcta')
        }else{
            console.log('Error de conexión')
        }
    });
}

module.exports = dbConnect


//mongodb+srv://RecG:9Ek6ugjV7EIAqjLo@cluster0.9lpdpja.mongodb.net/dbApi?retryWrites=true&w=majority
