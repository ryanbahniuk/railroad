class PostType
	include Mongoid::Document
	field :name, type: String
	field :aspects, type: Hash, default: {}
end
