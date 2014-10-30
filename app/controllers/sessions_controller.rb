class SessionsController < ApplicationController
	def login
		redirect_to admin_path if logged_in?
		@user = User.new
	end

	def logout
		sign_out
		redirect_to '/'
	end

	def set
		@user = User.find_by(email: params[:email])

		if @user && @user.authenticate(params[:password])
			status = true
		else
			status = false
		end

		respond_to do |format|
			format.js {
				if status
					sign_in @user
					render json: admin_path.to_json
				else
					render json: false.to_json
				end
			}
			format.html {
				if status
					sign_in @user
					redirect_to admin_path
				else
					flash.now[:error] = "Email or password not found."
					render :login
				end
			}
		end
	end

end
