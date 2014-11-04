EditUserController.$inject = ['$scope', '$location', '$routeParams', 'Users', 'Methods'];
function EditUserController($scope, $location, $routeParams, Users, Methods) {

  $scope.updateUser = Users.updateUser;
  $scope.deleteUser = Users.deleteUser;

  var allUsers = Users.data.all;
  $scope.user = Methods.findUser($routeParams.id, allUsers);
  Users.load(function(){
    allUsers = Users.data.all;
    $scope.user = Methods.findUser($routeParams.id, allUsers);
  });

  $scope.update = function(e){
    e.preventDefault();
    $scope.updateUser($scope.user, function(){
      $scope.viewSettings();
    });
  }

  $scope.delete = function(e){
    e.preventDefault();
    $scope.deleteUser($scope.user, function(){
      $scope.viewSettings();
    });
  }

  $scope.viewSettings = function(){
    $location.url('/settings');
  }
}