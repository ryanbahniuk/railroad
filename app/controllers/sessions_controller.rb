class SessionsController < ApplicationController
	def login
		@user = User.new
	end

	def logout
		sign_out
		redirect_to '/'
	end

	def set
		@user = User.find_by(email: params[:email])

		if @user && @user.authenticate(params[:password])
			sign_in @user
			redirect_to '/'
		else
			@user = User.new(username: params[:username])
			@user.errors.add(:login, "Username or Password did not match.")
			render :template => "sessions/login"
		end
	end
end
