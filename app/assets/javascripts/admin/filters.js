angular.module('textFilters', []).filter('capitalize', function() {
	return function(input) {
		var words = input.split(" ");
		for(var i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}
		return words.join(" ")
	};
});

angular.module('statusFilters', []).filter('published', function() {
	return function(input) {
		return input ? "Unpublish" : "Publish"
	};
});