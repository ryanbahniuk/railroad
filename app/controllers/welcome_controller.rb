class WelcomeController < ApplicationController
	def index
		@posts = Post.where(published: true)
	end
end
