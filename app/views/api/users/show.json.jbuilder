json.extract! @user, :id, :first_name, :last_name, :email, :zip_code, :created_at, :num_reviews

json.reviews @user.reviews.map { |review| review }
