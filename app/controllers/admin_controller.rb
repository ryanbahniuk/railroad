class AdminController < ApplicationController
	layout "admin"
	before_filter :load_post_types

	def load_post_types
		@post_types = PostType.all
	end

	def index
		@posts = Post.all
	end
end
