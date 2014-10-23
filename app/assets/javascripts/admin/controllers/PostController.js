function PostController($scope, $location) {
	// $scope.data.id = $routeParams.id;
	$scope.viewAdmin = function(){
    $location.url('/');
	}
}