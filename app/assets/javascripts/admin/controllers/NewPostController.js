function NewPostController($scope, $location, $routeParams, PostTypes, Methods) {
	$scope.post_type_id = $routeParams.typeId;

	var findPostType = Methods.findPostType;

	var allPostTypes = PostTypes.data;
	$scope.post_type = findPostType($scope.post_type_id, allPostTypes);
  PostTypes.load(function(){
  	allPostTypes = PostTypes.data;
		$scope.post_type = findPostType($scope.post_type_id, allPostTypes);
  });

  $scope.input = function(name, type){
  	if (type !== 'textarea') {
  		return '<input ng-model="formData[' + name + ']" type="{{ type }}" placeholder="{{ name | capitalize }}" name="post[{{ name }}]">'
  	} else {
			return '<textarea ng-model="formData[' + name + ']" placeholder="{{ name | capitalize }}" name="post[{{ name }}]"></textarea>'
  	}
  }

  $scope.createPost = function(){

  }
}