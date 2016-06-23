(function () {
    'use strict';
    angular.module('app', [])
    .controller('progressBarController', ['$scope', function ($scope) {
        $scope.buttonArray = [-25, -10, 10, 25];
        $scope.colourArray = {
            Green: 'progress-bar-info',
            Red: 'progress-bar-danger'
        };

        $scope.progressBarData = {
            availableOptions: [
              { id: '1', name: '#progressBar 1', value: 0, colour: $scope.colourArray["Green"] },
              { id: '2', name: '#progressBar 2', value: 0, colour: $scope.colourArray["Green"] },
              { id: '3', name: '#progressBar 3', value: 0, colour: $scope.colourArray["Green"] }
            ],
            selectedOption: { id: '1', name: '#progressBar 1', value: 0, colour: $scope.colourArray["Green"] }, //This sets the default value of the select in the ui
        };


        $scope.calculate = function (num, selectedId) {
            $scope.progressBarData.availableOptions.filter(function (obj) {
                if (obj.id === selectedId) {
                    obj.value += num;
                    if (obj.value > 100) {
                        obj.colour = $scope.colourArray["Red"];
                    } 
                    else if (obj.value < 0)
                    {
                        obj.value = 0;
                    }
                    else {
                        obj.colour = $scope.colourArray["Green"];
                    }
                }
            });
        };
    }]);
})();