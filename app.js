// Bu projede basit CRUD işlemleri gerçekleştirilecektir.

const express = require("express");
const app = express();
const Post = require("./Models/PostModel");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const ejs = require("ejs");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(fileUpload());

// template engine
app.set("view engine", "ejs");

app.get("", (req, res) => {
  // create data
  /* Post.create({
        title: "Title 1",
        description: "Lorem ipsum dolor sit amet creatus us",
        author: "Umut Topkaya"
    }) */
  // res.render("index.html")
});

// UPLOAD IMAGE and POST
app.post("/posts", (req, res) => {
  // sync fonk olmalarinin sebebi -> gorsel yuklenmeden klasorun olusmasi gerekiyor
  const uploadDir = "public/uploads";
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  // Image Upload Process - Resim Yukleme Islemi
  let uploadedImage = req.files.image; // gorsele ait tum bilgiler
  let uploadPath = __dirname + "/public/uploads/" + uploadedImage.name; // gorselin yuklenecegi server'daki dosya yolu
  uploadedImage.mv(uploadPath, async () => {
    await Post.create({
      ...req.body,
      image: "/uploads/" + uploadedImage.name,
    });
  });

  res.redirect("/details");
});

app.get("/details", async (req, res) => {
  const posts = await Post.find({}).sort("-time");
  res.render("details", { posts: posts });
});

// get page id
app.get('/details/:id', async (req,res) => {
  const post = await Post.findById(req.params.id);
  
  res.render("post", {post:post})

})

app.listen(3000, () => {
  console.log("sunucu 3000 portunda çalışıyor");
});
