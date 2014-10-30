class AdminController < ApplicationController
	layout "admin"
	before_filter :load_post_types

	def load_post_types
		@post_types = PostType.all
	end

	def index
		redirect_to login_path unless logged_in?
	end

	def posts
		posts = Post.all
		render json: posts
	end

	def post_types
		post_types = PostType.all
		render json: post_types
	end
end
