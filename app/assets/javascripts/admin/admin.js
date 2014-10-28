Admin = angular.module('Admin', ['ngRoute', 'textFilters'])

Admin.directive('ngFormInput', function($interpolate, $compile) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var template = '<input ng-model="{{name}}" type="{{type}}" placeholder="{{name | capitalize}}" name="post[{{name}}]">';
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
        console.log("Loading posts failed.");
      });
    }
  }

  return postData
});

Admin.factory('Methods', function(){
	return({
		findPostType: findPostType,
		findPosts: findPosts,
		findPost: findPost
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
});

Admin.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/admin', { templateUrl: '/assets/index.html', controller: 'IndexController' } )
		$routeProvider.when('/post/new', { templateUrl: '/assets/newPost.html', controller: 'NewPostController' } )
		$routeProvider.when('/post/:id', { templateUrl: '/assets/post.html', controller: 'PostController' } )
		$routeProvider.when('/posts/:typeId', { templateUrl: '/assets/posts.html', controller: 'PostsController' } )

		$routeProvider.otherwise({ templateUrl: '/assets/index.html', controller: 'IndexController' } )
	}
]);