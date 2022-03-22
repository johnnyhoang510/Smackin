class Review < ApplicationRecord
    validates :body, :user_id, :business_id, presence: true
    # rating has to be between 1 and 5
    validates :rating, presence: true, inclusion: { in: (1..5), message: "Please click on a star to rate the business"  }


    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business
end
