Admin = angular.module('Admin', ['ngRoute', 'textFilters'])

Admin.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/admin', { templateUrl: '/assets/index.html', controller: 'IndexController' } )
		$routeProvider.when('/post', { templateUrl: '/assets/post.html', controller: 'PostController' } )

		$routeProvider.otherwise({ templateUrl: '/assets/index.html', controller: 'IndexController' } )
	}
]);