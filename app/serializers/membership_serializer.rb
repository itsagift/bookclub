class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :club_id
  belongs_to :user

end
