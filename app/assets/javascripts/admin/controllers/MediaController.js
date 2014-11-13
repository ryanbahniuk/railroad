MediaController.$inject = ['$scope', '$location', 'Users'];
function MediaController($scope, $location, Users) {

  $scope.users = Users.data.all;
  $scope.current_user = Users.data.current;
  Users.load(function(){
    $scope.users = Users.data.all;
    $scope.current_user = Users.data.current;
  });

	$scope.viewNewImage = function(){
    $location.url('/image/new');
	}

	$scope.viewUpdateImage = function(image){
    $location.url('/type/' + image.id);
	}
}