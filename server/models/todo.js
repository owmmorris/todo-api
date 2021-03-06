let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        required: true,
        type: String,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo}