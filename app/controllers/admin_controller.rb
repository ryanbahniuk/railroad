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
		# result = []
		# PostType.all.each do |post_type|
		# 	obj = {}
		# 	obj["id"] = post_type.id.to_s
		# 	obj["name"] = post_type.name
		# 	obj["plural_name"] = post_type.name.pluralize(2)
		# 	obj["aspects"] = post_type.aspects
		# 	result << obj
		# end
		# render json: result
	end
end
