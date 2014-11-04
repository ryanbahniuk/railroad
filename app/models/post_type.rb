class PostType
	include Mongoid::Document
	include Mongoid::Timestamps
	field :name, type: String
	field :plural_name, type: String
	field :aspects, type: Hash, default: {}
	before_create :add_plural

	def add_plural
		self.plural_name = self.name.pluralize(2)
	end
end
