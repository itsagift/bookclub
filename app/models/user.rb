class User < ApplicationRecord
    has_many :memberships 
    has_many :clubs, through: :memberships
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
