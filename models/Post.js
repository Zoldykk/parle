const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please enter a title'],
    },

    description:{
        type: String,
        required: [true, 'please describe your post'],
    },

    community:{
        type: String,
        required: [true, 'please choose which community where you want to post to'],
    },

    voteCounter:{
        type: Number
    },

    originalPoster: {
        type: String,
        required: true
    }
})

const post = mongoose.model('post', postSchema);

module.exports = post