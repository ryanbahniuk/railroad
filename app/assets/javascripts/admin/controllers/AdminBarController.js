function AdminBarController($scope, $http, $location, PostTypes) {
	$scope.post_types = PostTypes.data;
  PostTypes.load(function(){
  	$scope.post_types = PostTypes.data;
  });

  $scope.viewPosts = function(id){
    $location.url('/posts/' + id);
	}
}