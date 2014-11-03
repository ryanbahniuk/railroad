function IndexController($scope, $location, Posts) {

	$scope.switchStatus = Posts.switchStatus;
  $scope.deletePost = Posts.deletePost;


	$scope.posts = Posts.data;
  Posts.load(function(){
  	$scope.posts = Posts.data;
  });

  $scope.delete = function(e, post){
    e.preventDefault();
    $scope.deletePost(post, function(){
      $scope.posts = findPosts($scope.post_type_id, Posts.data);
    });
  }

  $scope.switch = function(e, post){
    e.preventDefault();
    $scope.switchStatus(post, function(){
    });
  }

	$scope.viewPost = function(postId) {
  	$location.url('/post/' + postId);
  }
}