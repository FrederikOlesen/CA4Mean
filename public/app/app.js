'use strict';

// Declare app level module which depends on views, and components
angular.module('myAppRename', [
  'ngRoute',
  'myAppRename.controllers',
  'myAppRename.directives',
  'myAppRename.services',
  'myAppRename.factories',
  'myAppRename.filters',
  'myAppRename.view1',
  'myAppRename.doku',
  'myAppRename.search',
  'myAppRename.allcategories',
  'myAppRename.addwiki'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
