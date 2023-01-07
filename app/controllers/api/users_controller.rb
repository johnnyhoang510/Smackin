class Api::UsersController < ApplicationController

    def show
        @user = User.includes(:reviews).find(params[:id])

        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            @user.set_num_reviews
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 401
        end
    end


    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :zip_code, :password)
    end
end
