function AdminBarController($scope, $http, $location, Data) {
	$scope.post_types = [{name: 'Loading menu...', plural_name: 'Loading menu...'}];
	Data.getPostTypes().then(function(response){
    $scope.post_types = response.data;
  });

  $scope.viewPosts = function(id){
    $location.url('/posts/' + id);
	}
}