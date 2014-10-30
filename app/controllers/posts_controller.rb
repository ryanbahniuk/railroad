class PostsController < ApplicationController

	def create
		post = Post.new(post_params)

		if post.save
			render json: post
		else
			render json: {title: "Error!"}
		end
	end

	def show
		@post = Post.find(params[:id])
	end

	def update
		post = Post.find(params[:id])
		post_params.delete("_id")
		if post.update(post_params)
			render json: post
		else
			render json: {success: false}
		end
	end

	def destroy
		post = Post.find(params[:id])
		if post.destroy
			render json: {success: true, id: params[:id]}
		else
			render json: {success: false, id: params[:id]}
		end
	end

	private

	def post_params
		params.require(:post).permit!
		# params.require(:post).permit(:title, :body)
	end
end
