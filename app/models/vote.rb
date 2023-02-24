class Vote < ApplicationRecord
    validates :user_id, :review_id, presence: true

    validates :user_id, uniqueness: { scope: :review_id, message: "This user has already voted on this review" }

    def change_vote_status
        self.has_voted = true
        self.save!
    end

end
