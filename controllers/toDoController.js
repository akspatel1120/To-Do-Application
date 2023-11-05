const asyncHandler = require('express-async-handler');
const ToDoItem = require('../models/toDoItem.model');

// @desc get To Do Items
// @route GET /todoitems/
// @access Private

const getToDoItems = asyncHandler( async(req, res) => {
    
    const toDoItems = await ToDoItem.find();
    res.status(200).json(toDoItems);
});

// @desc get To Do Item using ID
// @route GET /todoitems/:id
// @access Private

const getToDoItemById = asyncHandler( async (req, res) => {
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

const addToDoItem = asyncHandler( async (req, res) => {
    if(!req.body){
        res.status(400);
        throw new Error('Please add a json request body');
    }
    console.log(req.body);

    const toDoItem = await ToDoItem.create({
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority
    });

    res.status(200).json(toDoItem);

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

const updateToDoItem = asyncHandler( async (req, res) => {

    const toDoItem = await ToDoItem.findById(req.params.id);

    if(!toDoItem){
        res.status(400);
        throw new error('To Do Item not found');
    }
    
    const updatedToDoItem = await ToDoItem.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedToDoItem);

});
// @desc delete To Do Item
// @route DELETE /todoitems/:id
// @access Private

const deleteToDoItem = asyncHandler(async (req, res) => {
    if(!req.params.id){
        res.status(400);
        throw new Error('Please provide a valid ID.');
    }

    const toDoItem = await ToDoItem.findById(req.params.id);

    if(!toDoItem){
        res.status(400);
        throw new error('To Do Item not found');
    }
    await ToDoItem.deleteOne({ _id: req.params.id });

    res.status(200).json({message: `Deleted ID: ${ req.params.id }` });

    // ToDoItem.findByIdAndDelete(req.params.id)
    //     .then(() => res.json("To-Do item deleted"))
    //     .catch(err => res.status(400).json("Error: " + err));
});

module.exports = {
    getToDoItems,
    getToDoItemById,
    addToDoItem,
    updateToDoItem,
    deleteToDoItem
}