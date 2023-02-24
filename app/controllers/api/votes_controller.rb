class Api::VotesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def find
        if params[:user_id] && params[:review_id]
            @vote = Vote.where("user_id = ? AND review_id = ?", params[:user_id], params[:review_id]).first

            if @vote
                render :show  
            else
                render json: @vote.errors.full_messages, status: 401
            end
        else
            render json: "Error, could not find vote"
        end
    end

    def show
        @vote = Vote.find(params[:id])

        if @vote
            render :show
        else
            render json: @vote.errors.full_messages, status: 401
        end
    end

    def create
        @vote = Vote.new(vote_params)

        if @vote.save
            @vote.change_vote_status
            render :show
        else
            render json: @vote.errors.full_messages, status: 401
        end
    end

    def destroy
        @vote = Vote.find(params[:id])

        if @vote && @vote.destroy
            render :show
        else
            render json: ["Couldn't delete vote."], status: 422
        end
    end

    private

    def vote_params
        params.require(:vote).permit(:user_id, :review_id)
    end
end
