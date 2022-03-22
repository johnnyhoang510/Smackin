# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# this is for attaching photos
require 'open-uri'

User.destroy_all
Business.destroy_all
Review.destroy_all

# ----- users
user1 = User.create!(first_name: 'John', last_name: 'Smith', email:'johnsmith@email.com', password: 'password', zip_code: 94606)
user2 = User.create!(first_name: 'Rick', last_name: 'Sanchez', email:'ricksanchez@email.com', password: 'password', zip_code: 94605)
user3 = User.create!(first_name: 'Steph', last_name: 'Curry', email:'stephcurry@email.com', password: 'password', zip_code: 94601)
user4 = User.create!(first_name: 'Peter', last_name: 'Griffin', email:'petergriffin@email.com', password: 'password', zip_code: 94610)
user5 = User.create!(first_name: 'Demo', last_name: 'User', email:'demouser@email.com', password: 'password', zip_code: 94602)

# ----- businesses
business1 = Business.create!(name: "TrueBurger", address: "146 Grand Ave", city: "Oakland", state: "CA", zip_code: 94612, phone_number: "(510) 208-5678", category:"Burgers", website:"http://www.trueburgeroakland.com", lat: 37.80279145639032, lng: -122.26515935093786, price:"$$", hours: "11:00AM - 8:00PM")
business1.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/trueburger.jpg"), filename: "trueburger.jpg")

business2 = Business.create!(name: "Tacos Mi Rancho", address: "1434 1st Ave", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 395-1403", category:"Mexican", website:"https://www.tacos.com", lat: 37.799534, lng: -122.256362, price:"$$", hours: "9:00AM - 12:00AM")
business3 = Business.create!(name: "Smokin Woods BBQ", address: "4307 Telegraph Ave", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 423-8634", category:"Barbeque", website:"https://www.smokinwoodsbbq.com", lat: 37.831919065169, lng: -122.26410305981324, price:"$$", hours: "12:00PM - 9:00PM")
business4 = Business.create!(name: "Kansai", address: "4345 Telegraph Ave", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 658-7273", category:"Japanese", website:"https://www.orderkansai.com", lat: 37.83200063948505, lng: -122.26393759431681, price:"$", hours: "11:30AM - 11:30PM")
business5 = Business.create!(name: "L & S Fish & Chips", address: "326 E 18th St", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 625-1700", category:"Seafood", website:"http://www.louisianafishandchips.net/", lat: 37.79970435200378, lng: -122.25139858853203, price:"$", hours: "12:0PAM - 6:30PM")
business6 = Business.create!(name: "Monster Pho", address: "360 40th St", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 788-4459", category:"Vietnamese", website:"https://www.monsterpho.com", lat: 37.8308727322662, lng: -122.2577183573041, price:"$", hours: "11:00AM - 8:00PM")
business7 = Business.create!(name: "Jong Ga House", address: "372 Grand Ave", city: "Oakland", state: "CA", zip_code: 94610, phone_number: "(510) 444-7658", category:"Korean", website:"https://www.jonggahouse.com", lat: 37.80912742696728, lng: -122.254985730861, price:"$$", hours: "11:00AM - 11:00PM")
business8 = Business.create!(name: "Mad Oak", address: "135 12th St", city: "Oakland", state: "CA", zip_code: 94607, phone_number: "(510) 843-7416", category:"Bars", website:"https://www.madoakbar.com", lat: 37.80006416808729, lng: -122.26469191551965, price:"$$", hours: "3:00PM - 12:00AM")
business9 = Business.create!(name: "World Famous Hotboys", address: "1601 San Pablo Ave", city: "Oakland", state: "CA", zip_code: 94612, phone_number: "(510) 000-0000", category:"Burgers", website:"https://www.worldfamoushotboys.com", lat: 37.8066309466293, lng: -122.27223291736733, price:"$$", hours: "11:00AM - 9:00PM")
business10 = Business.create!(name: "Yokee Milk Tea", address: "1728 Franklin St", city: "Oakland", state: "CA", zip_code: 94612, phone_number: "(510) 836-3288", category:"Milk tea", website:"https://www.yokee.business.site", lat: 37.8067426065941, lng: -122.26810218853186, price:"$", hours: "11:00AM - 6:00PM")
business11 = Business.create!(name: "Tacos El Gordo", address: "4201 International Blvd", city: "Oakland", state: "CA", zip_code: 94601, phone_number: "(510) 501-5103", category:"Tacos", website:"https://www.elgordobayarea.com", lat: 37.772695507925334, lng: -122.2159801020264, price:"$", hours: "6:00PM - 1:45AM")
business12 = Business.create!(name: "Farmhouse Kitchen Thai Cuisine", address: "336 Water St", city: "Oakland", state: "CA", zip_code: 94607, phone_number: "(510) 419-0541", category:"Thai", website:"https://farmhousethai.com/oakland/", lat: 37.79439751978787, lng: -122.27544737319042, price:"$$", hours: "11:30AM - 1:30PM")
business13 = Business.create!(name: "MAMA Oakland", address: "388 Grand Ave", city: "Oakland", state: "CA", zip_code: 94610, phone_number: "(510) 974-6372", category:"Italian", website:"https://www.mama-oakland.com", lat: 37.80921062565971, lng: -122.25453175969645, price:"$$$", hours: "5:00M - 9:00PM")
business14 = Business.create!(name: "Commis", address: "3859 Piedmont Ave", city: "Oakland", state: "CA", zip_code: 94611, phone_number: "(510) 653-3902", category:"American", website:"https://www.commisrestaurant.com", lat: 37.82486929710936, lng: -122.25489403086075, price:"$$$$", hours: "5:30PM - 11:30PM")
business15 = Business.create!(name: "Portal", address: "1611 2nd Ave", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 663-7678", category:"American", website:"https://www.orderportaloakland.com", lat: 37.799459409894325, lng: -122.2546341038738, price:"$$", hours: "11:00AM - 9:00PM")
business16 = Business.create!(name: "Q's Halal", address: "2306 Central Ave", city: "Alameda", state: "CA", zip_code: 94501, phone_number: "(510) 227-5870", category:"Mediterranean", website:"https://www.qhalal.com", lat: 37.76464146540329, lng: -122.243935475039, price:"$", hours: "11:00AM - 8:00PM")
business17 = Business.create!(name: "Burma Superstar", address: "1345 Park St", city: "Alameda", state: "CA", zip_code: 94501, phone_number: "(510) 522-6200", category:"Burmese", website:"https://www.burmasuperstar.co", lat: 37.763888930077925, lng: -122.24363844620362, price:"$$", hours: "11:30AM - 8:30PM")
business18 = Business.create!(name: "Izza", address: "4419 Telegraph Ave", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 607-7361", category:"Japanese", website:"https://www.izza.menu11.com", lat: 37.83266725896303, lng: -122.26384788853136, price:"$$", hours: "11:30AM - 12:00AM")
business19 = Business.create!(name: "Annapurna Restaurant and Bar", address: "948 Clay St", city: "Oakland", state: "CA", zip_code: 94607, phone_number: "(510) 250-9696", category:"Indian", website:"https://www.annapurnaoakland.com", lat: 37.80244306885019, lng: -122.27523078853197, price:"$$", hours: "11:00AM - 9:30PM")
business20 = Business.create!(name: "Banh Mi Ba Le", address: "1909 International Blvd", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 261-9800", category:"Vietnamese", website:"http://banh-mi-ba-le.cafe-inspector.com/", lat: 37.78630872314333, lng: -122.2409487020285, price:"$", hours: "7:30AM - 3:00PM")

# ----- reviews
review1 = Review.create!(rating: 5, body: "Best burgers I've ever had! It's a little pricey for a burger but it is so worth it. I had the bacon cheesy trueburger. The bacon was perfect, and the bun complimented everything so well. Would definitely come back again.", user_id: user1.id, business_id: business1.id)
review2 = Review.create!(rating: 3, body: "We went here for happy hour. It's nothing special, but the price was really good for the amount of food and quality. I would say come here with some friends after hanging out, but not for a special occassion dinner or anything. Big plus for staying open pretty late.", user_id: user1.id, business_id: business2.id)
review3 = Review.create!(rating: 3, body: "Can't beat the BBQ here. As authentic as you can get. However, the service is extremely lacking. Granted, they were busy and seemed to be short staff. I would come back, but might order takeout instead.", user_id: user2.id, business_id: business3.id)
review4 = Review.create!(rating: 5, body: "The BEST cheese steak fries in the town! They have a big menu, but come here for the fries. You will not be disappointed. Add shrimp if you'd like, they use black tiger shrimp which is BOMB.", user_id: user2.id, business_id: business4.id)
review5 = Review.create!(rating: 2, body: "It was meh. There's plenty of better pho spots in Oakland. We only came here for lunch to try it out since none of us had eaten here before.", user_id: user3.id, business_id: business5.id)
review6 = Review.create!(rating: 4, body: "Love this place. It's a above average AYCE Korean BBQ spot. You can tell their meat is of higher quality than other KBBQ spots around the area. Only reason it wasn't a 5 was because parking is really hit and miss here, and also because they're so busy, the service isn't the greatest but they're really nice.", user_id: user3.id, business_id: business6.id)
