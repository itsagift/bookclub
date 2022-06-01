class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :admin
  has_many :memberships

  def admin 
    self.object.memberships.map do |membership|
      if membership.admin
        {admin_user_id: membership.user_id}
    end 
  end 
end

  
end
