$(document).ready(function(){
	$(document).on('click', '.add-aspect', function(event) {
		event.preventDefault();
		var $postTypeTemplate = $('#post-type-template').html();
		$("#post-type-template").after($postTypeTemplate);
	});
});