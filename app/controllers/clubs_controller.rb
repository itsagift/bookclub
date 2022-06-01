class ClubsController < ApplicationController
  # skip_before_action :authorize
  # @current_user = User.find_by(id: session[:user_id])
  def index
    clubs = Club.all
    render json: clubs
  end

  def create
    club = Club.create!(club_params)
    membership = Membership.create!(user_id: @current_user.id, club_id: club.id, admin: true)
    render json: club
  end

  def destroy
    club = Club.find_by(id: params[:id])
    club.destroy
    head :no_content
  end

  private
  def club_params
    params.permit(:name, :description)
  end
    
end
