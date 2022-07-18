const express = require('express');
const router = express.Router();

//TODO http://localhost/tracks get, post, put, delete, update

router.get("/tracks", (req, res) =>{
        const data = ["hola", "mundo"];
        res.send({data});
})

module.exports = router;