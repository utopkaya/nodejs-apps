const mongoose = require("mongoose")
// Schema
const Schema = mongoose.Schema

// Connection
mongoose.connection("mongodb://localhost/nodejs-learning-test-db")

// Post Schema
const PostSchema = new Schema({
    title: String,
    description: String,
    author: String,
    time: {
        type: Date,
        default: Date.now()
    } 
})

// Post Model
const Post = mongoose.model("Post", PostSchema)

