/**
 * Created by frederikolesen on 18/11/14.
 */

var mongoose = require('mongoose');
var articles = mongoose.model('Articles');

function getAllArticles(callback) {
    articles.find({}, function (err, wiki) {
        if (err) {
            return callback(err);
        }
        callback(null, wiki);
    });
}

function getWiki(title, callback) {
    articles.find({title: title}, function (err, wiki) {
        if (err) {
            return callback(err);
        }
        callback(null, wiki);
    });
}

function getCategories(callback) {
    articles.find({categories: new RegExp("^")}, function (err, categories) {
        if (err) {
            return callback(err);
        }
        callback(null, categories);
    })
}

module.exports = {
    getAllArticles: getAllArticles,
    getWiki: getWiki,
    getCategories: getCategories
}

