const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { errorHandler }  = require('./middleware/errorMiddleware');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", () =>{
    console.log("MongoDB connection established");
});

const toDoItemsRouter = require('./routes/toDoItems');

app.use('/todoitems', toDoItemsRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});