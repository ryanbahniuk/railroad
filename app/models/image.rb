class Image
	attr_accessible :image
	include Mongoid::Document
	include Mongoid::Timestamps
	field :title, type: String
	field :caption, type: String
	field :author
	mount_uploader :image, ImageUploader
end
