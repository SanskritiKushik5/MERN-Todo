const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    mytodo: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('todo', todoSchema);