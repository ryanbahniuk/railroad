class Image
	include Mongoid::Document
	include Mongoid::Timestamps
	field :title, type: String
	field :caption, type: String
	field :author
	mount_uploader :file, ImageUploader, type: String
end
