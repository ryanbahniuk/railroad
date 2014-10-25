function PostsController($scope, $location, $routeParams, Data) {
	$scope.post_type_id = $routeParams.id

	$scope.posts = [{title: 'Loading posts...'}];
	Data.getPosts().then(function(response){
    $scope.posts = response.data;
  });

  $scope.viewNew = function(postTypeId) {
  	$location.url('/post/new?id=' + postTypeId);
  }
}