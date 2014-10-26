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

  var postData = {
    posts: [{title: 'Loading...'}],
    isLoaded: false
  }

  // postData.loadPosts = function(){
  //   if (!postData.isLoaded) {
  //     $http.get('/admin/posts').success(function(data){
  //       postData.posts = data;
  //       postData.isLoaded = true;
  //     }).error(function(){
  //       console.log("Loading posts failed.");
  //     });
  //   }
  // }

  // return postData
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
  	return {}
  }

  function findPosts(post_type_id, posts) {
  	return _.filter(posts, function(post){ 
  		return post.type === post_type_id; 
  	});
  }

  function findPost(post_id, posts) {
  	return _.filter(posts, function(post){ 
  		return post.id === post_id; 
  	})[0];
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