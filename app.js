// Bu projede basit CRUD işlemleri gerçekleştirilecektir.

const express = require("express")
const app = express()

app.get("", (req, res) => {
    res.send("hello world")
})

app.listen(3000, ()=>{
    console.log("sunucu 3000 portunda çalışıyor");
})
