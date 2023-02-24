class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in, only: [:create, :show, :update, :destroy]

    def index
        if params[:business_id]
            if current_user
                @reviews = Review
                            .where("reviews.business_id = ?", params[:business_id])
                            .order("CASE WHEN reviews.user_id = #{current_user.id} THEN 1 ELSE 2 END")
            else
                @reviews = Review.where("reviews.business_id = ?", params[:business_id])
            end
        elsif params[:user_id]
            if params[:sort]
                @reviews = Review
                            .joins(:business)
                            .where("reviews.user_id = ?", params[:user_id])
                            .order(params[:sort])
            else
                @reviews = Review
                            .joins(:business)
                            .where("reviews.user_id = ?", params[:user_id])
                            .order("businesses.name")
            end
        end
        render :index
    end

    def create
        @review = Review.new(review_params)
        @user = @review.user
        
        if @review.save
            @user.set_num_reviews
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
        @user = @review.user
        
        if @review && @review.destroy
            @user.set_num_reviews
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
