function PostController($scope, $location, $routeParams, Data, Methods) {
	$scope.post_id = $routeParams.id;

	var findPost = Methods.findPost;
	var findPostType = Methods.findPostType;
	var getPostTypes = Data.getPostTypes;

	$scope.post_type = {name: "Loading...", plural_name: "Loading...", aspects: {}}
	Data.getPosts().then(function(response){
    var allPosts = response.data;
    $scope.post = findPost($scope.post_id, allPosts);
  	$scope.post_type_id = $scope.post.type;

		getPostTypes().then(function(response){
	    var allPostTypes = response.data;
	    $scope.post_type = findPostType($scope.post_type_id, allPostTypes);
	  });
  });

	$scope.viewAdmin = function(){
    $location.url('/');
	}
}