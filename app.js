var signUp = angular.module('signUp', []);
signUp.controller('signUpController', ['$scope', function ($scope) {
  $scope.information = {}
  $scope.submitForm = function (user) {
    $scope.msg = "You are successfully logged in " + $scope.user.firstName;
    $scope.information = angular.copy(user)
   console.log('gh')
  }
}])