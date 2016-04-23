/*angular.module('myApp', [])
    //.constant('VERSION', "malename")
    .controller('myCtrl', [$scope, myCtrl])

function myCtrl($scope) {
    $scope.inputs = [
        'malename': "male name",
        'femalename': "female name"
    ];
};*/
var app = angular.module('myApp', [])

/*app.constant('VERSION', "5")
app.run(function (VERSION, $rootScope) {
    $rootScope.version = VERSION;
})*/

app.controller('myCtrl', function ($scope) {
    $scope.inputs = {};
    $scope.gender = ["male", "female"];
    $scope.submit = function () {
        $scope.hideForm = true;
    }

});
