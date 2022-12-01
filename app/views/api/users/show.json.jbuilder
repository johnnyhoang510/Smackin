json.extract! @user, :id, :first_name, :last_name, :email, :zip_code

json.reviews @user.reviews.map { |review| review }
