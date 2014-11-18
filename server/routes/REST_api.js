var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var articles = mongoose.model('Articles');

/* GET ALL Articles From The DataBase */
router.get('/articles', function (req, res) {
    if (typeof global.mongo_error !== "undefined") {
        res.status(500);
        res.end("Error: " + global.mongo_error + " To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    articles.find({title: "Abu Dhabi"}, function (err, wiki) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(wiki));
    });
});

module.exports = router;
