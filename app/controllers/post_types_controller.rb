class PostTypesController < ApplicationController
	def new
		@post_type = PostType.new
	end

	def create
		fields = {}
		post_type_params[:aspects].each do |aspect|
			fields[aspect["field"].downcase] = aspect["type"]
		end
		PostType.create(name: post_type_params[:name].downcase, aspects: fields)
		redirect_to admin_path
	end

	private

	def post_type_params
		params.permit!
	end
end
