function PostController($scope, $location, $routeParams, Posts, PostTypes, Methods) {
	$scope.post_id = $routeParams.id;

	var findPost = Methods.findPost;
	var findPostType = Methods.findPostType;
	var loadPostTypes = PostTypes.load;
	$scope.updatePost = Posts.updatePost;
	$scope.deletePost = Posts.deletePost;

  var allPosts = Posts.data;
  $scope.post = findPost($scope.post_id, allPosts);
  var allPostTypes = PostTypes.data;
  $scope.post_type = findPostType($scope.post.type, allPostTypes);
  Posts.load(function(){    
    allPosts = Posts.data;
    $scope.post = findPost($scope.post_id, allPosts);
  	$scope.post_type = findPostType($scope.post.type, allPostTypes);
	  loadPostTypes(function(){
	  	$scope.post_type = findPostType($scope.post.type, allPostTypes);
	  });
 	});

 	$scope.viewPosts = function(id){
    $location.url('/posts/' + id);
  }

 	$scope.update = function(e){
    e.preventDefault();
    $scope.updatePost($scope.post, function(){
    	$scope.viewPosts($scope.post.type);
    });
  }

  $scope.delete = function(e){
    e.preventDefault();
    $scope.deletePost($scope.post, function(){
    	$scope.viewPosts($scope.post.type);
    });
  }
}