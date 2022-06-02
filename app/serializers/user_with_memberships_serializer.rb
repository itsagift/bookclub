class UserWithMembershipsSerializer < ActiveModel::Serializer
  attributes :id
  
  has_many :memberships
  
end
