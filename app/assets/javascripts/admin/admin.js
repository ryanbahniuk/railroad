Admin = angular.module('Admin', ['ngRoute', 'textFilters']);

Admin.directive('ngFormInput', function($interpolate, $compile) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (scope.type !== 'textarea') {
        var template = '<input ng-model="post.{{name}}" type="{{type}}" placeholder="{{name | capitalize}}" name="post[{{name}}]">';
      } else {
        var template = '<textarea ng-model="post.{{name}}" placeholder="{{name | capitalize}}" name="post[{{name}}]"></textarea>';
      }
      var interpolated = $interpolate(template)(scope);
      var html = $(interpolated);
      element.replaceWith($compile(html)(scope));
    }
  }
});

Admin.directive('ngName', function() {
  return {
    controller: function($scope) {}
  }
});

Admin.directive('ngType', function() {
  return {
    controller: function($scope) {}
  }
});

Admin.factory('PostTypes', function($http, $q){
  var postTypeData = {
    data: [{name: 'Loading...', plural_name: 'Loading...', aspects: {}}],
    isLoaded: false
  }

  postTypeData.load = function(callback){
    if (!postTypeData.isLoaded) {
      $http.get('/admin/post_types').success(function(data){
        postTypeData.data = data;
        postTypeData.isLoaded = true;
        callback();
      }).error(function(){
        console.log("Loading post types failed.");
      });
    }
  }

  postTypeData.createType = function(newType, callback) {
    $http.post('/post_types', newType).success(function(data){
      postTypeData.data.push(data);
      callback();
    }).error(function(){
      console.log("Create type failed :-(");
    });
  }

  postTypeData.updateType = function(type, callback) {
    var url = '/post_types/' + type.id;
    $http({ method: 'PATCH', url: url, data: type})
    .success(function(data){
      callback();
    })
    .error(function(){
      console.log("Update type failed :-(");
    });
  }

  return postTypeData
});

Admin.factory('Posts', function($http, $q){
  var postData = {
    data: [{id: '', title: 'Loading...', type: ''}],
    isLoaded: false
  }

  postData.load = function(callback){
    if (!postData.isLoaded) {
      $http.get('/admin/posts').success(function(data){
        postData.data = data;
        postData.isLoaded = true;
        callback();
      }).error(function(){
        console.log("Loading posts failed :-(");
      });
    }
  }

  postData.createPost = function(newPost, callback) {
    $http.post('/posts', newPost).success(function(data){
      postData.data.push(data);
      callback();
    }).error(function(){
      console.log("Create post failed :-(");
    });
  }

  postData.updatePost = function(post, callback) {
    var url = '/posts/' + post.id;
    $http({ method: 'PATCH', url: url, data: post})
    .success(function(data){
      callback();
    })
    .error(function(){
      console.log("Update post failed :-(");
    });
  }

  postData.deletePost = function(post, callback) {
    var url = '/posts/' + post.id;
    $http({ method: 'DELETE', url: url})
    .success(function(data){
      for(var i = 0; i < postData.data.length; i++) { 
        if (postData.data[i].id === data.id) { 
          postData.data.splice(i, 1)
        } 
      }
      callback();
    })
    .error(function(){
      console.log("Delete post failed :-(");
    });
  }

  return postData
});

Admin.factory('Methods', function(){
	return({
		findPostType: findPostType,
		findPosts: findPosts,
		findPost: findPost,
    convertAspectsToArray: convertAspectsToArray,
    convertAspectsToObject: convertAspectsToObject
	});
  
  function findPostType(id, post_types) {
  	for(var i = 0; i < post_types.length; i++) {
  		if (post_types[i].id === id) {
  			return post_types[i]
  		}
  	}
  	return {name: 'Loading...', plural_name: 'Loading...', aspects: {}}
  }

  function findPosts(post_type_id, posts) {
  	return _.filter(posts, function(post){ 
  		return post.type === post_type_id; 
  	});
  }

  function findPost(post_id, posts) {
    for(var i = 0; i < posts.length; i++) {
      if (posts[i].id === post_id) {
        return posts[i]
      }
    }
    return {id: '', title: 'Loading...', type: ''}
  }

  function convertAspectsToArray(type) {
    if (type.aspects.length === undefined) {
      var result = [];
      for (var key in type.aspects) { 
        var obj = {};
        obj.name = key;
        obj.type = type.aspects[key];
        result.push(obj); 
      }
      type.aspects = result;
    }
    return type
  }

  function convertAspectsToObject(type) {
    if (typeof type.aspects.length === "number") {
      var obj = {};
      for (var i = 0; i < type.aspects.length; i++) {
        obj[type.aspects[i].name] = type.aspects[i].type
      }
      type.aspects = obj;
    }
    return type
  }
});

Admin.config(['$routeProvider',
	function($routeProvider) {
    $routeProvider.when('/admin', { templateUrl: '/assets/index.html', controller: 'IndexController' } )
		$routeProvider.when('/settings', { templateUrl: '/assets/settings.html', controller: 'SettingsController' } )
		$routeProvider.when('/post/new', { templateUrl: '/assets/newPost.html', controller: 'NewPostController' } )
		$routeProvider.when('/post/:id', { templateUrl: '/assets/post.html', controller: 'PostController' } )
    $routeProvider.when('/posts/:typeId', { templateUrl: '/assets/posts.html', controller: 'PostsController' } )
    $routeProvider.when('/type/new', { templateUrl: '/assets/newType.html', controller: 'NewTypeController' } )
		$routeProvider.when('/type/:id', { templateUrl: '/assets/type.html', controller: 'TypeController' } )

		$routeProvider.otherwise({ templateUrl: '/assets/index.html', controller: 'IndexController' } )
	}
]);

Admin.config(['$httpProvider',
  function($httpProvider) {
    authToken = $("meta[name=\"csrf-token\"]").attr("content")
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken
  }
]);  