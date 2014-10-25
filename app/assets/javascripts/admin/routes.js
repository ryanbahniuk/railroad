Admin = angular.module('Admin', ['ngRoute', 'textFilters'])
Admin.factory('Data', function($http, $q){
  return({
    getPosts: getPosts,
    getPostTypes: getPostTypes
  });

  function getPosts() {
    return $http.get('/admin/posts');
  }

  function getPostTypes() {
    return $http.get('/admin/post_types');
  }

});

Admin.factory('Methods', function(){
	return({
		findPostType: findPostType
	});
  
  function findPostType(id, post_types) {
  	for(var i = 0; i < post_types.length; i++) {
  		if (post_types[i].id === id) {
  			return post_types[i]
  		}
  	}
  	return {}
  }
});

Admin.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/admin', { templateUrl: '/assets/index.html', controller: 'IndexController' } )
		$routeProvider.when('/post', { templateUrl: '/assets/post.html', controller: 'PostController' } )
		$routeProvider.when('/post/new', { templateUrl: '/assets/newPost.html', controller: 'PostController' } )
		$routeProvider.when('/posts/:id', { templateUrl: '/assets/posts.html', controller: 'PostsController' } )

		$routeProvider.otherwise({ templateUrl: '/assets/index.html', controller: 'IndexController' } )
	}
]);