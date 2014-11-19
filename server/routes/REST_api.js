var express = require('express');
var router = express.Router();

var articles = require('../model/wikiarticles');

/* GET ALL Articles From The DataBase */
router.get('/articles', function (req, res) {
    articles.getAllArticles(function (err, wiki) {
        if (err) {
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(wiki));
    });
});

router.get('/articles/:title', function (req, res) {
    var titlepara = req.params.title;
    articles.getWiki(titlepara, function (err, title) {
        if (err) {
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(title));
    });
});

router.get('/categories/all', function (req, res) {
    console.log("In category detail");

    articles.getCategories1(function (err, categories) {
        if (err) {
            console.log("Cateogory log");
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(categories));
    });
});

module.exports = router;
