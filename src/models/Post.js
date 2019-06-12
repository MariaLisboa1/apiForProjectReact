const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true, //cria campo creatdAt e updetAt
    });

module.exports = mongoose.model('Post', postSchema);