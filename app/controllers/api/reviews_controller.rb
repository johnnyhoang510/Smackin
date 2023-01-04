class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in, only: [:create, :show, :update, :destroy]

    def index
        # debugger
        if params[:business_id]
            @reviews = Review.where(business_id: params[:business_id])
        elsif params[:user_id]
            # if params[:sort]
            #     # @sort = params[:sort]
            #     @reviews = Review.joins(:business).where("reviews.user_id = ?", params[:user_id]).order(params[:sort])
            # else
            #     # default scope is alphabetical by business name 
            #     # @sort = ""
            #     @reviews = Review.joins(:business).where("reviews.user_id = ?", params[:user_id]).order("businesses.name")
            #     # @reviews = Review.where(user_id: params[:user_id])
            # end
            @reviews = Review.where(user_id: params[:user_id])
        else
            @reviews = Review.all
        end
        render :index
    end

    def create
        @review = Review.new(review_params)
        @user = @review.user
        @user.set_num_reviews

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
        @user = @review.user
        @user.set_num_reviews

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review && @review.destroy
            @user = @review.user
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
