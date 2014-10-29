class PostTypesController < ApplicationController
	def new
		@post_type = PostType.new
	end

	def create
		fields = {}
		post_type_params["aspects"].each do |aspect|
			fields[aspect["name"].downcase] = aspect["type"]
		end
		type = PostType.new(name: post_type_params["name"].downcase, aspects: fields)
		if type.save
			render json: type
		else
			render json: {success: false}
		end
	end

	def update
		post_type = PostType.find(params[:id])
		post_type_params.delete("_id")
		fields = {}
		post_type_params["aspects"].each do |aspect|
			fields[aspect["name"].downcase] = aspect["type"]
		end
		if post_type.update(name: post_type_params["name"].downcase, aspects: fields)
			render json: post_type
		else
			render json: {success: false}
		end
	end

	private

	def post_type_params
		params.require(:post_type).permit!
	end
end
