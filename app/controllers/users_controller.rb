class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def find
        user = User.find_by(username: params[:username])
        render json: user
    end

    def show
        render json: @current_user
    end

    def clubs
        render json: @current_user, serializer: UserWithMembershipsSerializer
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
