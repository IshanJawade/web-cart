const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    // picture: {
    //     type: Image,
    //     require: true
    // },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('blog', blogSchema);