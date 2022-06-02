class MembershipSerializer < ActiveModel::Serializer
  attributes :club, :admin

  belongs_to :user
  belongs_to :club

  

end
