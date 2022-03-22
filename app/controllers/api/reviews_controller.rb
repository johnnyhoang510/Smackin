class Api::ReviewsController < ApplicationController
    # :index, :create, :show, :update, :destroy

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            
        else

        end
    end


    private
    
    def review_params
        params.require(:review).permit(:rating, :body, :user_id, :business_id)
    end
end
