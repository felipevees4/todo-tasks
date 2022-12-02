var mongoose = require("mongoose");
var express = require("express");
var TaskModel = require('./task_schema');
var router = express.Router();
var query = "mongodb+srv://felipevelasquez:felipe1234@cluster0.mguygsv.mongodb.net/TaskBD?retryWrites=true&w=majority"
const db = (query);

mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("Error!" + error);
    } else {
        console.log("Se ha conectado con la base de datos exitosamente");
    }
});

module.exports = router;