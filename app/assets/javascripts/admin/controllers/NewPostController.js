function NewPostController($scope, $location, $routeParams, PostTypes, Methods) {
	$scope.post_type_id = $routeParams.typeId;

	var findPostType = Methods.findPostType;

	var allPostTypes = PostTypes.data;
	$scope.post_type = findPostType($scope.post_type_id, allPostTypes);
  PostTypes.load(function(){
  	allPostTypes = PostTypes.data;
		$scope.post_type = findPostType($scope.post_type_id, allPostTypes);
  });
}