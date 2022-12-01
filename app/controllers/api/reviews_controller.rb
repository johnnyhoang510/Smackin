class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in, only: [:create, :show, :update, :destroy]

    def index
        if params[:business_id]
            @reviews = Review.where(business_id: params[:business_id])
            @action = "business"
            p params
        elsif params[:user_id]
            @reviews = Review.where(user_id: params[:user_id])
            @action = "user"
            p params
        else
            @reviews = Review.all
        end
        # debugger
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
        params.require(:review).permit(:id, :rating, :body, :user_id, :business_id)
    end
end
