const mongoose = require("mongoose")
// Schema
const Schema = mongoose.Schema

// Connection
mongoose.connect("mongodb://localhost/nodejs-learning-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Post Schema
const PostSchema = new Schema({
    title: String,
    description: String,
    author: String,
    image: String,
    time: {
        type: Date,
        default: Date.now()
    } 
})

// Post Model
const Post = mongoose.model("Post", PostSchema)

module.exports = Post
