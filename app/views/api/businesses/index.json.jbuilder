@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :address, :city, :state, :zip_code, :phone_number, :category, :website, :lat, :lng, :price, :hours
    end
end