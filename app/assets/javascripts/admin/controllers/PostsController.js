PostsController.$inject = ['$scope', '$location', '$routeParams', 'Posts', 'PostTypes', 'Methods'];
function PostsController($scope, $location, $routeParams, Posts, PostTypes, Methods) {
	$scope.post_type_id = $routeParams.typeId;
  var findPosts = Methods.findPosts;
  var findPostType = Methods.findPostType;
	var loadPostTypes = PostTypes.load;
  $scope.switchStatus = Posts.switchStatus;
  $scope.deletePost = Posts.deletePost;

  $scope.posts = findPosts($scope.post_type_id, Posts.data);
  var allPostTypes = PostTypes.data;
  $scope.post_type = findPostType($scope.post_type_id, allPostTypes);
  Posts.load(function(){    
    $scope.posts = findPosts($scope.post_type_id, Posts.data);
    $scope.post_type = findPostType($scope.post_type_id, allPostTypes);
    loadPostTypes(function(){
      $scope.post_type = findPostType($scope.post_type_id, allPostTypes);
    });
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

  $scope.viewNew = function(postTypeId) {
  	$location.url('/post/new?typeId=' + postTypeId);
  }
}