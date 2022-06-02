class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: :create
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
        
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

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception }, status: :unprocessable_entity
      end
end
