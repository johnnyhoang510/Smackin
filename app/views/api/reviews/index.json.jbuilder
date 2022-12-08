@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :rating, :body, :user_id, :business_id, :created_at, :updated_at
        json.user_first_name review.user.first_name
        json.user_last_name review.user.last_name
        json.business_name review.business.name
    end
end