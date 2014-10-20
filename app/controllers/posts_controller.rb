class PostsController < ApplicationController
	def new
		@post_type = PostType.find(params[:id])
		@post = Post.new
	end

	def create
		@post = Post.new(post_params)

		if @post.save
			redirect_to admin_path
		else
			render 'new'
		end
	end

	def show
		@post = Post.find(params[:id])
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])

		if @post.update(post_params)
			redirect_to admin_path
		else
			render 'edit'
		end
	end

	def destroy
		post = Post.find(params[:id])
		post.destroy
		redirect_to admin_path
	end

	private

	def post_params
		params.require(:post).permit!
		# params.require(:post).permit(:title, :body)
	end
end
