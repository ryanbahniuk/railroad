function NewPostController($scope, $location, $routeParams, Posts, PostTypes, Methods) {
	$scope.post_type_id = $routeParams.typeId;
  $scope.post = {type: $scope.post_type_id};

  var findPostType = Methods.findPostType;
  var convertAspectsToObject = Methods.convertAspectsToObject;
  $scope.createPost = Posts.createPost;

  var allPostTypes = PostTypes.data;
  $scope.post_type = findPostType($scope.post_type_id, allPostTypes);
  $scope.post_type = convertAspectsToObject($scope.post_type);
  PostTypes.load(function(){
    allPostTypes = PostTypes.data;
    $scope.post_type = findPostType($scope.post_type_id, allPostTypes);
    $scope.post_type = convertAspectsToObject($scope.post_type);
  });

  $scope.viewPosts = function(id){
    $location.url('/posts/' + id);
  }

  $scope.fieldSortFunction = function(name) {
  }

  $scope.create = function(e){
    e.preventDefault();
    $scope.createPost($scope.post, function(){
      $scope.viewPosts($scope.post_type_id);
    });
  }
}