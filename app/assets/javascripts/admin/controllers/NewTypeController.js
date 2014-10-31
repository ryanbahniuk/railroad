function NewTypeController($scope, $location, PostTypes) {
  $scope.createType = PostTypes.createType;
  $scope.type = {name: "", aspects: [{name: "", type: "default"}]};

  $scope.addAspect = function(e){
    e.preventDefault();
    var newAspect = {name: "", type: "default"};
    $scope.type.aspects.push(newAspect);
  }

  $scope.removeAspect = function(e, aspect) {
    e.preventDefault();
    var index = $scope.type.aspects.indexOf(aspect);
    $scope.type.aspects.splice(index, 1);
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