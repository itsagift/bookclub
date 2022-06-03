class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :club, :admin

  belongs_to :user
  belongs_to :club

  

end
