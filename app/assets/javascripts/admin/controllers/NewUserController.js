NewUserController.$inject = ['$scope', '$location', '$routeParams', 'Users', 'Methods'];
function NewUserController($scope, $location, $routeParams, Users, Methods) {
	$scope.user = {rights: "default"};
	$scope.createUser = Users.createUser;

	$scope.create = function(e){
    e.preventDefault();
    $scope.createUser($scope.user, function(){
      $scope.viewSettings();
    });
  }

  $scope.viewSettings = function(){
    $location.url('/settings');
  }
}