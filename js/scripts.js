/*angular.module('myApp', [])
    //.constant('VERSION', "malename")
    .controller('myCtrl', [$scope, myCtrl])

function myCtrl($scope) {
    $scope.inputs = [
        'malename': "male name",
        'femalename': "female name"
    ];
};*/
var app = angular.module('myApp', ['ngMessages', 'ngAnimate']);

/*app.constant('VERSION', "5")
app.run(function (VERSION, $rootScope) {
    $rootScope.version = VERSION;
})*/

app.controller('myCtrl', function ($scope) {
    $scope.input = {};
    $scope.gender = ["male", "female"];

    $scope.hideForm = false;

    $scope.submit = function () {
        // hide the form only after submit
        $scope.hideForm = true;
    }
    $scope.reset = function () {
        // show the input section and reset the input data
        //$scope.hideForm = false;
        //$scope.input = {};
        location.reload();
    }

});
