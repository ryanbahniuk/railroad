class ImagesController < ApplicationController

	def create
		image = Image.new(image_params)

		if image.save
			render json: image
		else
			render json: {title: "Error!"}
		end
	end

	def update
		image = Image.find(params[:id])
		image_params.delete("_id")
		if image.update(image_params)
			render json: image
		else
			render json: {success: false}
		end
	end

	def destroy
		image = Image.find(params[:id])
		if image.destroy
			render json: {success: true, id: params[:id]}
		else
			render json: {success: false, id: params[:id]}
		end
	end

	private

	def image_params
		params.require(:image).permit(:title, :caption, :file)
	end
end
