class Membership < ApplicationRecord
    belongs_to :user 
    belongs_to :club 

    validates_uniqueness_of :admin, if: :admin, message: 'for this club already exists.' 

end
