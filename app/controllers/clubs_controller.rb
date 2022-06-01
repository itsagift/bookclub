class ClubsController < ApplicationController
  def index
    clubs = Club.all
    render json: clubs
  end

  def create
    club = Club.create!(club_params)
    render json: club
  end

  def destroy
    club = Club.find_by(id: params[:id])
    #destroy dependents
    head :no_content
  end

  private
  def club_params
    params.permit(:name, :description)
  end
    
end
