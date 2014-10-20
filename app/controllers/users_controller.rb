class UsersController < ApplicationController
	def new
		@user = User.new
	end

	def create
		redirect_to root_path if logged_in?
		@user = User.new(new_user_params)

		if @user.save
			sign_in @user
			redirect_to root_path
		else
			render 'new'
		end
	end

	private

	def new_user_params
		params.require(:user).permit(:name, :email, :password)
	end
end
