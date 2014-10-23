function IndexController($scope, $location, $http) {
	$scope.posts = [{title: 'Loading posts...', body: ''}];

	var loadPosts = function() {
	  $http.get('/admin/posts')
	  .success(function(data){
	    $scope.posts = data
	  });
	}
  loadPosts();

	$scope.viewPost = function(){
    $location.url('/post');
	}
}