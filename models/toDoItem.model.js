const mongoose = require('mongoose');

const toDoItemSchema = mongoose.Schema({
    description: {
        required: true,
        trim: true,
        type: String
    },
    dueDate: {
        required: true,
        type: Date
    },
    priority: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ToDoItem', toDoItemSchema);