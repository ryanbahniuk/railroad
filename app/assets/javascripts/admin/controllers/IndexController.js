function IndexController($scope, $location, $http, Data) {
	Data.getPosts().then(function(response){
    $scope.posts = response.data;
  });

	$scope.viewPost = function(){
    $location.url('/post');
	}
}