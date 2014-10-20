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

	def edit
		@user = User.find(params[:id])
	end

	def update
		@user = User.find(params[:id])
		redirect_to root_path unless current_user.id == @user.id

		if @user.update(update_user_params)
			redirect_to root_path
		else
			render 'edit'
		end
	end

	private

	def update_user_params
		params.require(:user).permit(:name, :email)
	end

	def new_user_params
		params.require(:user).permit(:name, :email, :password)
	end
end
