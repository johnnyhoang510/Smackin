class Api::ReviewsController < ApplicationController
    # :index, :create, :show, :update, :destroy

    before_action :require_logged_in, only: [:create, :show, :update, :destroy]

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review && @review.destroy
            render :show
        else
            render json: ["An error occurred while deleting. Please try again"], status: 422
        end
    end


    private
    
    def review_params
        params.require(:review).permit(:rating, :body, :user_id, :business_id)
    end
end
