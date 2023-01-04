json.extract! user, :id, :first_name, :last_name, :email, :zip_code, :created_at, :num_reviews

if params[:sort]
    json.reviews user.reviews.order(params[:sort]).each do |review|
        json.review review
        json.business review.business
        json.photo_url url_for(review.business.photos[0])
        json.business_name review.business.name
    end
else
    json.reviews user.reviews.includes(:business).order("businesses.name").each do |review|
        json.review review
        json.business review.business
        json.photo_url url_for(review.business.photos[0])
        json.business_name review.business.name
    end
end
