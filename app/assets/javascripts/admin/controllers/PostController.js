function PostController($scope, $location, $routeParams, Data, Methods) {
	$scope.post_type_id = $routeParams.id;
	$scope.findPostType = Methods.findPostType;

	Data.getPosts().then(function(response){
    $scope.posts = response.data;
  });

	Data.getPostTypes().then(function(response){
    $scope.post_types = response.data;
    $scope.post_type = $scope.findPostType($scope.post_type_id, $scope.post_types);
  });

	$scope.viewAdmin = function(){
    $location.url('/');
	}
}