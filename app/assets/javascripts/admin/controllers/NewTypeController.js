function NewTypeController($scope, $location, PostTypes) {
  $scope.createType = PostTypes.createType;
  $scope.type = {name: "", aspects: [{name: "", type: ""}]};

  $scope.addAspect = function(e){
    e.preventDefault();
    var newAspect = {name: "", type: ""};
    $scope.type.aspects.push(newAspect);
  }

  $scope.create = function(e){
    e.preventDefault();
    $scope.createType($scope.type, function(){
      $scope.viewSettings();
    });
  }

  $scope.viewSettings = function(){
    $location.url('/settings');
  }
}