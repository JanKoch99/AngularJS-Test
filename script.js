var myApp = angular.module("myList", []);

myApp.controller("myListController", function ($scope) {
    $scope.items = [];
    $scope.newItem = "";
    $scope.newPrice = 0;
    $scope.getPrice = new Price();


    $scope.pushItem = function () {
        if ($scope.newItem != "" && !isNaN(parseInt($scope.newPrice))) {
            $scope.items.push(new Item($scope.newItem, $scope.newPrice));
            $scope.getPrice.addPrice($scope.newPrice);
            $scope.newItem = "";
            $scope.newPrice = 0;
        }
    }
    $scope.deleteItem = function (index) {
        $scope.getPrice.removePrice($scope.items[index].price)
        $scope.items.splice(index, 1);
    }

})


class Item {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


class Price {
    price;

    constructor() {
        this.price = 0;
    }

    addPrice(amount) {
        this.price += parseInt(amount) ;
    }

    removePrice(amount) {
        this.price -= parseInt(amount);
    }
}