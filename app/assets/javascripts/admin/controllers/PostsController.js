function PostsController($scope, $location, $routeParams, Data, Methods) {
	$scope.post_type_id = $routeParams.typeId;
	var findPosts = Methods.findPosts;

	$scope.posts = [{title: 'Loading posts...'}];
	Data.getPosts().then(function(response){
    var allPosts = response.data;
    $scope.posts = findPosts($scope.post_type_id, allPosts);
  });

  $scope.viewPost = function(postId) {
  	$location.url('/post/' + postId);
  }

  $scope.viewNew = function(postTypeId) {
  	$location.url('/post/new?typeId=' + postTypeId);
  }
}