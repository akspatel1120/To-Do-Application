const router = require('express').Router();
let ToDoItem = require('../models/toDoItem.model');
const { getToDoItems, getToDoItemById, addToDoItem, deleteToDoItem } = require('../controllers/toDoController');


router.get('/', getToDoItems);

router.get('/:id', getToDoItemById);

router.post('/add', addToDoItem);

router.delete('/:id', deleteToDoItem);

module.exports = router;