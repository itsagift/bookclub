class Membership < ApplicationRecord
    belongs_to :user 
    belongs_to :club 

    validates :admin, uniqueness: { scope: :club_id }, if: :admin

end
