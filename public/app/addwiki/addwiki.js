/**
 * Created by Michael on 20-11-2014.
 */
'use strict';

angular.module('myAppRename.addwiki', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/addwiki', {
            templateUrl: 'app/addwiki/addwiki.html',
            controller: 'addwikiCtrl'
        });
    }])

    .controller('addwikiCtrl', ['$scope', function($scope) {

        $scope.articles =
            [
                {title :"WIKITESTTITLE", url: "wiki.test.com", abstract: "somerandomtext", categories:"test"},
            ];
        $scope.data
        $scope.data1
        $scope.data2
        $scope.data3
        $scope.addPerson = function(){
            $scope.articles.push({title: $scope.data, url:$scope.data1, abstract:$scope.data2,categories:$scope.data3})
            $scope.data="";
            $scope.data1="";
            $scope.data2="";
            $scope.data3="";

        }

       // var wiki = new model.wikiModel({title : 'MichaelsAwesomness', url : www.lol.dk, abstract:'Tihi',categories:'awesome'});
       //$scope.save = function(err, wiki){
       //    if(err){
       //        console.log("fejl")
       //    }
       //     console.log("Det virker - MÅSKE")
       // }
    }]);
