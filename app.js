// Bu projede basit CRUD işlemleri gerçekleştirilecektir.

const express = require("express")
const app = express()
const Post = require("./Models/PostModel")

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("public"))

// template engine
app.set("view engine", )

app.get("", (req, res) => {
    
    // create data
    /* Post.create({
        title: "Title 1",
        description: "Lorem ipsum dolor sit amet creatus us",
        author: "Umut Topkaya"
    }) */

   // res.render("index.html")

})

app.post("/posts", (req,res) =>{
    console.log(req.body);

    // create data for mongodb database
    Post.create({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    })

    res.redirect("/")
})

app.listen(3000, ()=>{
    console.log("sunucu 3000 portunda çalışıyor");
})
