module SessionsHelper

	def sign_in(user)
		session[:user_id] = user.id.to_s
	end

	def sign_out
		session.delete(:user_id)
	end

	def current_user
		if session[:user_id]
			@current_user ||= User.find(session[:user_id])
		end
	end

	def current_user=(user)
		@current_user = user
	end

	def logged_in?
		!current_user.nil?
	end
end
