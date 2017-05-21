var application = angular.module("myApp", ["ngRoute"]);


application.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/add',
        {
            templateUrl: 'Templates/index1.html'
        })
        .when('/show',
        {
            templateUrl: 'Templates/index2.html'
        });


});

application.controller("myController", function ($scope) {
    alert("ready");
});