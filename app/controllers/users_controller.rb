class UsersController < ApplicationController
	def new
		@user = User.new
	end

	def create
		user = User.new(new_user_params)
		if user.save
			render json: user
		else
			render json: {title: "Error!"}
		end
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
		user = User.find(params[:id])
		update_user_params.delete("_id")

		if user.update(update_user_params)
			render json: user
		else
			render json: {success: false}
		end
	end

	def destroy
		user = User.find(params[:id])
		if user.destroy
			render json: {success: true, id: params[:id]}
		else
			render json: {success: false, id: params[:id]}
		end
	end

	private

	def update_user_params
		params.require(:user).permit(:name, :email, :rights)
	end

	def new_user_params
		params.permit(:name, :email, :password, :rights)
	end
end
