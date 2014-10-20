class Post
	include Mongoid::Document
	field :type, type: String
	# field :author, type: Moped::BSON::ObjectId
end
