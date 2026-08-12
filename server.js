const express = require("express")

const app = express();


app.use("/hello",(req,res)=>{
    console.log("Hello world")
    res.send({
        Message:"Hello world"
    })
})


app.listen(3000,()=>[
    console.log("server run at port no 3000")
])