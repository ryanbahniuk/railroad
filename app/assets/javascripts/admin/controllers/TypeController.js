function TypeController($scope, $location, $routeParams, PostTypes, Methods) {
  $scope.post_type_id = $routeParams.id;

  $scope.updateType = PostTypes.updateType;
  var convertAspectsToArray = Methods.convertAspectsToArray;

  var allPostTypes = PostTypes.data;
  $scope.type = Methods.findPostType($scope.post_type_id, allPostTypes);
  $scope.type = convertAspectsToArray($scope.type);
  PostTypes.load(function(){
    allPostTypes = PostTypes.data;
    $scope.type = findPostType($scope.post.type, allPostTypes);
    $scope.type = convertAspectsToArray($scope.type);
  });

  $scope.update = function(e){
    e.preventDefault();
    $scope.updateType($scope.type, function(){
      $scope.viewSettings();
    });
  }

  $scope.addAspect = function(e){
    e.preventDefault();
    var newAspect = {name: "", type: ""};
    $scope.type.aspects.push(newAspect);
  }

  $scope.removeAspect = function(e, aspect) {
    e.preventDefault();
    var index = $scope.type.aspects.indexOf(aspect);
    $scope.type.aspects.splice(index, 1);
  }

  $scope.viewSettings = function(){
    $location.url('/settings');
  }
}