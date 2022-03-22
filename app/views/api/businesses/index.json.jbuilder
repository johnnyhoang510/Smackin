@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :address, :city, :state, :zip_code, :phone_number, :category, :website, :lat, :lng, :price, :hours
        json.photoURLs business.photos.map { |file| url_for(file) }
        # reviews may need to go here once seeded
    end
end