SettingsController.$inject = ['$scope', '$location', 'PostTypes', 'Users'];
function SettingsController($scope, $location, PostTypes, Users) {

  $scope.deleteType = PostTypes.deleteType;
	$scope.deleteUser = Users.deleteUser;

	$scope.post_types = PostTypes.data;
  PostTypes.load(function(){
  	$scope.post_types = PostTypes.data;
  });

  $scope.users = Users.data.all;
  $scope.current_user = Users.data.current;
  Users.load(function(){
    $scope.users = Users.data.all;
    $scope.current_user = Users.data.current;
  });

	$scope.viewNewPostType = function(){
    $location.url('/type/new');
	}

	$scope.viewUpdatePostType = function(type){
    $location.url('/type/' + type.id);
	}

  $scope.viewNewUser = function(){
    $location.url('/user/new');
  }

  $scope.viewUpdateUser = function(user){
    $location.url('/user/' + user.id + '/edit');
  }

	$scope.delete = function(e, type){
    e.preventDefault();
    $scope.deleteType(type, function(){
    });
  }

  $scope.deleteU = function(e, user){
    e.preventDefault();
    $scope.deleteUser(user, function(){
    });
  }
}