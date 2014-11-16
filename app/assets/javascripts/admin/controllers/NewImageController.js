NewImageController.$inject = ['$scope', '$location', 'Users', 'Images'];
function NewImageController($scope, $location, Users, Images) {

  $scope.createImage = Images.createImage;
  $scope.image = {};

  $scope.current_user = Users.data.current;
  Users.load(function(){
    $scope.current_user = Users.data.current;
  });

  $scope.viewMedia = function(){
    $location.url('/media');
  }

  $scope.create = function(e){
    e.preventDefault();
    $scope.image.author = $scope.current_user;
    
    $scope.createImage($scope.image, function(){
      $scope.viewMedia();
    });
  }
}