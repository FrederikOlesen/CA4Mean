'use strict';

angular.module('myAppRename.allcategories', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/allcategories', {
            templateUrl: 'app/allcategories/allcategories.html',
            controller: 'allcategoriesCtrl'
        });
    }])

    .controller('allcategoriesCtrl', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'api/categories'
        }).
            success(function (data, status, headers, config) {
                $scope.wiki = data;
            }).
            error(function (data, status, headers, config) {
                $scope.error = data;
            });
    });
