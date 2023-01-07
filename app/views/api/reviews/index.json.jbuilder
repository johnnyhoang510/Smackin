json.array! @reviews.each do |review|
        json.extract! review, :id, :rating, :body, :user_id, :business_id, :created_at, :updated_at
        json.user_first_name review.user.first_name
        json.user_last_name review.user.last_name
        json.photo_url url_for(review.business.photos[0])
        json.business review.business
end
