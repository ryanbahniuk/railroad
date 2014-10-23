class AdminController < ApplicationController
	layout "admin"

	def index
		@post_types = PostType.all
		@posts = Post.all
	end
end
