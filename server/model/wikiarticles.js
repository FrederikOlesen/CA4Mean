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

function getSpecificTitle(title, callback) {
    articles.find({title: title}, function (err, wiki) {
        if (err) {
            return callback(err);
        }
        callback(null, wiki);
    });
}

module.exports = {
    getAllArticles: getAllArticles,
    getSpecificTitle: getSpecificTitle
}

