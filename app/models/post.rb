class Post
	include Mongoid::Document
	include Mongoid::Attributes::Dynamic
	field :title, type: String
	field :body, type: String
	field :type, type: String

	def method_missing(method_sym, *arguments, &block)
		puts "Method: #{method_sym} is missing."
	end
end
