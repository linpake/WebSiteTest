/// <reference path="../lib/angular.min.js" />
var bookModule = angular.module("bookApp", []);
bookModule.controller("bookController", function ($scope) {
    $scope.books = [
        {
            name: "Vampire academy. Hunters and victims",
            author: "Richelle Mead",
            price: 15
        },
        {
            name: "Vampire academy. Ice bite",
            author: "Richelle Mead",
            price: 16
        },
        {
            name: "Harry Potter and philosopher stone",
            author: "Joanne Rowling",
            price: 12
        },
        {
            name: "Harry Potter and secret room",
            author: "Joanne Rowling",
            price: 13
        },
    ];
});
