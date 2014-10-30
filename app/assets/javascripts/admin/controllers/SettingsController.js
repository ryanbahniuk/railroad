function SettingsController($scope, $location, PostTypes) {

	$scope.deleteType = PostTypes.deleteType;

	$scope.post_types = PostTypes.data;
  PostTypes.load(function(){
  	$scope.post_types = PostTypes.data;
  });

	$scope.viewNewPostType = function(){
    $location.url('/type/new');
	}

	$scope.viewUpdatePostType = function(type){
    $location.url('/type/' + type.id);
	}

	$scope.delete = function(e, type){
    e.preventDefault();
    $scope.deleteType(type, function(){
    });
  }
}