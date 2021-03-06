class MembershipsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    memberships = Membership.all
    render json: memberships
  end

  def create 
    membership = Membership.create!(membership_params)
   if membership.valid? 
    render json: membership 
   else
     render json: {"error": membership.errors.full_messages}, status: :unprocessable_entity
   end
  end

  def destroy
    membership = Membership.find_by(id: params[:id])
    membership.destroy 
    head :no_content
  end

  def club_memberships
    memberships = Membership.where(club_id: params[:id])
    render json: memberships
  end
  
  private

  def membership_params
    params.permit(:user_id, :club_id, :admin)
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
