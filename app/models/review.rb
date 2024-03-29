# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  body        :string           not null
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates :body, :user_id, :business_id, presence: true
    # rating has to be between 1 and 5
    validates :rating, presence: true, inclusion: { in: (1..5), message: "must be selected in order to submit your review" }


    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business

    has_many :votes,
        foreign_key: :review_id,
        class_name: :Vote
end
