function PostsController($scope, $location, $routeParams, Posts, Methods) {
	$scope.post_type_id = $routeParams.typeId;
	var findPosts = Methods.findPosts;

  $scope.posts = findPosts($scope.post_type_id, Posts.data);
  Posts.load(function(){    
    $scope.posts = findPosts($scope.post_type_id, Posts.data);
  });

  $scope.viewPost = function(postId) {
  	$location.url('/post/' + postId);
  }

  $scope.viewNew = function(postTypeId) {
  	$location.url('/post/new?typeId=' + postTypeId);
  }
}