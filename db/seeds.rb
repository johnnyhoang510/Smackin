# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Business.destroy_all

# ----- users
user1 = User.create!(first_name: 'John', last_name: 'Smith', email:'johnsmith@email.com', password: 'password', zip_code: 94606)
user2 = User.create!(first_name: 'Rick', last_name: 'Sanchez', email:'ricksanchez@email.com', password: 'password', zip_code: 94500)
user3 = User.create!(first_name: 'Steph', last_name: 'Curry', email:'stephcurry@email.com', password: 'password', zip_code: 94601)
user4 = User.create!(first_name: 'Peter', last_name: 'Griffin', email:'petergriffin@email.com', password: 'password', zip_code: 94616)
user5 = User.create!(first_name: 'Demo', last_name: 'User', email:'demouser@email.com', password: 'password', zip_code: 94619)

# ----- businesses
business1 = Business.create!(name: "McDonalds", address: "123 Fake St", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 000-0000", category:"Fast food", website:"https://www.mcdonalds.com", lat: 37.80279145639032, lng: -122.26515935093786, price:"$", hours: "Open 24 hours")
business2 = Business.create!(name: "Taco Truck", address: "123 Real St", city: "Oakland", state: "CA", zip_code: 94616, phone_number: "(510) 100-0000", category:"Tacos", website:"https://www.tacos.com", lat: 37.799534, lng: -122.256362, price:"$$", hours: "9:00AM - 12:00AM")
business3 = Business.create!(name: "Kansai", address: "4345 Telegraph Ave", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 658-7273", category:"Sushi", website:"https://www.kansai.com", lat: 37.83200063948505, lng: -122.26393759431681, price:"$", hours: "11:30AM - 11:30PM")

