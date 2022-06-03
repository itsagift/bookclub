class MembershipWithUserSerializer < ActiveModel::Serializer
  attributes :id, :user, :username

  belongs_to :user
  belongs_to :club

  def username
    object.user.username
  end
  
end
