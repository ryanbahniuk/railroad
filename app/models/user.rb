class User
	include Mongoid::Document
	include Mongoid::Timestamps
	field :name, type: String
	field :email, type: String
	field :rights, type: String
	field :password_digest, type: String

	def authenticate(password)
		self.password == password
	end

	def password
		@password ||= BCrypt::Password.new(password_digest)
	end

	def password=(pass)
		@password = BCrypt::Password.create(pass)
		self.password_digest = @password
	end
end
