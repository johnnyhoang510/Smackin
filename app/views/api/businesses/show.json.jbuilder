json.extract! @business, :id, :name, :address, :city, :state, :zip_code, :phone_number, :category, :website, :lat, :lng, :price, :hours

json.photoURLs @business.photos.map { |file| url_for(file) }

# json.reviews do
#     @business.reviews.each do |review|
#         json.set! review.id do
#             json.extract! review, :id, :rating, :body, :user_id, :business_id
#         end
#     end
# end

json.reviews @business.reviews.map { |review| review }