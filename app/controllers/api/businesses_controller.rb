class Api::BusinessesController < ApplicationController
    def index

        if params[:query]
            @businesses = Business.includes(:reviews)
                .where(
                    "category ILIKE ? OR 
                    name ILIKE ? OR 
                    price ILIKE ?",
                    "%#{params[:query]}%", "%#{params[:query]}%", "#{params[:query]}"
                )
            if @businesses.length > 0
                render :index
            else
                render json: ["No results for #{params[:query]} Oakland, CA"], status: 422
            end
        else
            @businesses = Business.includes(:reviews).all
            render :index
        end
    end


    def show
        @business = Business.includes(:reviews).find(params[:id])

        if @business
            render :show
        else
            render json: @business.errors.full_messages, status: 404
        end
    end


    # private
end
