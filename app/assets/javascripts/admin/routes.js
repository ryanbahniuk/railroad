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

Admin.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/admin', { templateUrl: '/assets/index.html', controller: 'IndexController' } )
		$routeProvider.when('/post', { templateUrl: '/assets/post.html', controller: 'PostController' } )
		$routeProvider.when('/posts/:id', { templateUrl: '/assets/posts.html', controller: 'PostsController' } )

		$routeProvider.otherwise({ templateUrl: '/assets/index.html', controller: 'IndexController' } )
	}
]);