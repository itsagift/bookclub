class ClubsController < ApplicationController
  before_action :authorize_club
  before_action :authorize_admin

  skip_before_action :authorize_club, only: [:index, :create, :destroy, :createbook]
  skip_before_action :authorize_admin, only: [:index, :create, :destroy, :books]
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

  def createbook
    book = Book.create!(book_params)
    render json: book
  end

  private

  

  def club_params
    params.permit(:name, :description)
  end

  def book_params
    params.permit(:title, :author, :club_id)
  end

  def authorize_club
    return render json: { error: "Not authorized" }, status: :unauthorized unless Membership.exists?(club_id: params[:id], user_id: @current_user.id)
  end

  def authorize_admin
    return render json: { error: "Not authorized" }, status: :unauthorized unless Membership.exists?(club_id: params[:id], user_id: @current_user.id, admin: true)
  end

  
    
end
