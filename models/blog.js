const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating the blog schema and declaring requirements 
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true}); //fetching time stamps for when a blog is made

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;  