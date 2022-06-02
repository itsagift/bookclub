class User < ApplicationRecord
    has_many :memberships 
    has_many :clubs, through: :memberships
    has_secure_password
    validates_uniqueness_of :username, message: "already exists" 
    validates :username, presence: true
end
