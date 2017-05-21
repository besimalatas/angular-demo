
var application =angular.module("myApp", ["ngRoute"]);

application.config(function ($routeProvider,$locationProvider) {

    $routeProvider
        .when('/index1',
    {
        templateUrl: "/Templates/Indexsad1.html"
    });

    $locationProvider.html5Mode(false).hashPrefix("!");
});

application.controller("myController",
    function($scope) {
       
    });