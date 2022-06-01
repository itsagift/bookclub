class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :admin
  has_many :memberships

  def admin
    @admin_id = self.object.memberships.find{
      |membership| membership.admin 
    } 
    {username: @admin_id.user.username, id: @admin_id.user_id}
  end 

  
end
