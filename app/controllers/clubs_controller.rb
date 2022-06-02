class ClubsController < ApplicationController
  # before_action :authorize_club
  # skip_before_action :authorize
  # @current_user = User.find_by(id: session[:user_id])

  # @members = Club.memberships.all.each do |membership|
  #   m
  # end

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

  def books
    books = Book.where(club_id: params[:id])
    render json: books
  end

  private

  

  def club_params
    params.permit(:name, :description)
  end

  def authorize_club
    return render json: { error: "Not authorized" }, status: :unauthorized unless Membership.exists?(club_id: params[:id], user_id: @current_user.id)
  end
    
end
