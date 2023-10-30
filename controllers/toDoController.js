const asyncHandler = require('express-async-handler');

// @desc get To Do Items
// @route GET /todoitems/
// @access Private

const getToDoItems = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get To Do Items'});

    // ToDoItem.find()
    //     .then(toDoItems => {
    //         console.log(toDoItems);
    //         res.send(toDoItems)
    //     })
    //     .catch(err => res.status(400).json('Error: ' + err));
});

// @desc get To Do Item using ID
// @route GET /todoitems/:id
// @access Private

const getToDoItemById = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get To Do Item by ID'});

    // ToDoItem.findById(req.params.id)
    // .then(toDoItem => {
    //     res.json(toDoItem)
    // })
    // .catch(err => res.status(400).json('Error: ' + err));
});

// @desc add To Do Item
// @route POST /todoitems/add
// @access Private

const addToDoItem = asyncHandler(async (req, res) => {
    if(!req.body.json){
        res.status(400);
        throw new Error('Please add a json request body');
    }
    console.log(req.body);
    res.status(200).json({ message: 'Add To Do Items' });

    // const description = req.body.description;
    // const dueDate = Date.parse(req.body.dueDate);
    // const priority = req.body.priority;

    // const newToDoItem = new ToDoItem ({
    //     description,
    //     dueDate,
    //     priority
    // });

    // newToDoItem.save()
    //     .then(() => res.json('To-Do item added'))
    //     .catch(err => res.status(400).json('Error: ' + err));
});

// @desc delete To Do Item
// @route DELETE /todoitems/:id
// @access Private

const deleteToDoItem = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Delete To Do Item'});

    // ToDoItem.findByIdAndDelete(req.params.id)
    //     .then(() => res.json("To-Do item deleted"))
    //     .catch(err => res.status(400).json("Error: " + err));
});

module.exports = {
    getToDoItems,
    getToDoItemById,
    addToDoItem,
    deleteToDoItem
}