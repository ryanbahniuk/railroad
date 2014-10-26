function NewPostController($scope, $location, $routeParams, Data, Methods) {
	$scope.post_type_id = $routeParams.typeId;

	var findPostType = Methods.findPostType;

	$scope.post_type = {name: "Loading...", plural_name: "Loading...", aspects: {}}
	Data.getPostTypes().then(function(response){
    var allPostTypes = response.data;
    $scope.post_type = findPostType($scope.post_type_id, allPostTypes);
  });
}