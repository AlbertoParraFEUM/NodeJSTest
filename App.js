require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const dbConnect = require('./config/mongo.js')


app.use = (cors())

const port = process.env.PORT || 3000

//aqui invocamos a las rutas
//todo localhost/api/_______

app.use("/api",require("./routes/tracks.js"))

app.listen(port, () =>{
    console.log("Tu app esta lista por http://localhost:" + port)
})

dbConnect();