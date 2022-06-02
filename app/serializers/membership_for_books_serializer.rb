class MembershipForBooksSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user

  
end