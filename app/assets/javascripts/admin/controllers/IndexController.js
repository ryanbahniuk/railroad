function IndexController($scope, $location, $http, Posts) {
	$scope.posts = Posts.data;
  Posts.load(function(){
  	$scope.posts = Posts.data;
  });

	$scope.viewPost = function(){
    $location.url('/post');
	}
}