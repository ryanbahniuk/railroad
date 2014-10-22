class AdminController < ApplicationController
	def index
		@post_types = PostType.all
		@posts = Post.all
	end
end
