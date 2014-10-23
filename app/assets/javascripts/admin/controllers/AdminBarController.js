function AdminBarController($scope, $http) {
	$scope.post_types = [{name: 'Loading menu...'}];

	var loadPostTypes = function() {
	  $http.get('/admin/post_types')
	  .success(function(data){
	    $scope.post_types = data
	  });
	}
  loadPostTypes();
}