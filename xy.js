(function () {
    'use strict';

    var app = angular.module("app", ["chart.js"]);

    app.controller("LineCtrl", ['$scope', function ($scope) {
        $scope.labels = ['a', 'c', 'c', 'd', 's', 'a', 'w','a', 'c', 'c', 'd', 's', 'a', 'w','a', 'c', 'c', 'd', 's', 'a', 'w','a', 'c', 'c', 'd', 's', 'a', 'w', 'a', 'w'];
        $scope.active = true;
        $scope.colors = [[ { 'backgroundColor': "rgba(91, 200, 84,0)", 'strokeColor': "rgba(91, 200, 84,.5)", 'pointColor': "rgba(91, 200, 84,.01)", 'pointHighlightStroke': "rgba(91, 200, 84,0.5)", 'pointStrokeColor': "rgba(91, 200, 84,0.01)", 'pointHighlightFill': "#fff" }]];

        $scope.exceptionReason = "Order(DN-11503) has been create order plan";
        $scope.data =[
            [98, 68, 40, 19, 96, 27, 100,60, 58, 20, 45, 80, 56, 40,48, 52, 10, 8, 5, 45, 90,68,78, 50, 20, 30, 37, 55, 27,60]
        ];

     /*   showScale: false,
            bezierCurve: false,
            pointDot : true,
            responsive: true,
        */
        $scope.option2 =   {
            responsive: true,
            animation: {
                duration: 0
            },

            elements: {
                arc: {
                    backgroundColor: '#000',
                    borderColor: '#fff',
                    borderWidth: 2,
                    borderAlign: 'center'
                },
                line: {
                    showLines: false,
                    borderWidth:2,
                    tension:0,
                    fill:false,
                    steppedLine:false,
                    borderColor:'rgba(21, 34, 61, 0.3);'
                },
                point: {
                    radius:5,
                    backgroundColor:'rgba(21, 34, 61, 1)',
                    // borderColor:'rgba(21, 34, 61, 0.8);'
                }
            },
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }],
                gridLines: {
                    display: false
                }
            },
            tooltips: {
                enabled: true
            }
        };

    }]);


})();
