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

router.get('/articles/:title', function (req, res){
    console.log("In article detail");
    var title = req.params.title;
    model.ProductModel.find({title:title}, function(err, title){
        if (err)
        {
            return callback(err);
        }
        else
        {
            res.render('categorydetail', {categorydetail: categoryId});
        }
    });
});

module.exports = router;
