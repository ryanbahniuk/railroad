UserController.$inject = ['$scope', '$routeParams', '$location', 'Posts', 'Users', 'Methods'];
function UserController($scope, $routeParams, $location, Posts, Users, Methods) {

  var findPostsFromUser = Methods.findPostsFromUser;
  var findUser = Methods.findUser;
  $scope.switchStatus = Posts.switchStatus;
  $scope.deletePost = Posts.deletePost;

  var users = Users.data.all;
  $scope.user = findUser($routeParams.id, users);
  Users.load(function(){
    users = Users.data.all;
    $scope.user = findUser($routeParams.id, users);
  });

  $scope.posts = findPostsFromUser($routeParams.id, Posts.data);
  Posts.load(function(){    
    $scope.posts = findPostsFromUser($routeParams.id, Posts.data);
  });

  $scope.delete = function(e, post){
    e.preventDefault();
    $scope.deletePost(post, function(){
      $scope.posts = findPostsFromUser($routeParams.id, Posts.data);
    });
  }

  $scope.switch = function(e, post){
    e.preventDefault();
    $scope.switchStatus(post, function(){
    });
  }
}