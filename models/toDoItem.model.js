const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoItemSchema = new Schema({
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

const ToDoItem = mongoose.model('ToDoItem', toDoItemSchema);

module.exports = ToDoItem;