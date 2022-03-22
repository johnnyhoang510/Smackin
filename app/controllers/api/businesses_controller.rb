class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
        render :index
    end


    def show
        @business = Business.find(params[:id])

        if @business
            render :show
        else
            render json: @business.errors.full_messages, status: 404
        end
    end


    private

    def business_params
        params.require(:business).permit(:name, :address, :city, :state, :zip_code, :phone_number, :category, :lat, :lng, :photos)
    end
end
