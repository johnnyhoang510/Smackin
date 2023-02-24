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

# resets the IDs
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('businesses')
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')


# ----- users
user1 = User.create!(first_name: 'Guy', last_name: 'Fieri', email:'guyfieri@email.com', password: 'password', zip_code: 94606)
user2 = User.create!(first_name: 'Rick', last_name: 'Sanchez', email:'ricksanchez@email.com', password: 'password', zip_code: 94605)
user3 = User.create!(first_name: 'Steph', last_name: 'Curry', email:'stephcurry@email.com', password: 'password', zip_code: 94601)
user4 = User.create!(first_name: 'wat', last_name: 'man', email:'watman@email.com', password: 'password', zip_code: 94610)
user5 = User.create!(first_name: 'Demo', last_name: 'User', email:'demouser@email.com', password: 'password', zip_code: 94602)

# ----- businesses
business1 = Business.create!(name: "TrueBurger", address: "146 Grand Ave", city: "Oakland", state: "CA", zip_code: 94612, phone_number: "(510) 208-5678", category:"Burgers", website:"http://www.trueburgeroakland.com", lat: 37.80279145639032, lng: -122.26515935093786, price:"$$", hours: "11:00 AM-08:00 PM")
business1.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/trueburger4.jpg"), filename: "trueburger4.jpg")
business1.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/trueburger2.jpg"), filename: "trueburger2.jpg")
business1.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/trueburger.jpg"), filename: "trueburger.jpg")
business1.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/trueburgermap.png"), filename: "trueburgermap.png")

business2 = Business.create!(name: "Tacos Mi Rancho", address: "1434 1st Ave", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 395-1403", category:"Tacos", website:"https://www.tacos.com", lat: 37.799534, lng: -122.256362, price:"$$", hours: "09:00 AM-11:30 PM")
business2.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/rancho5.jpg"), filename: "rancho5.jpg")
business2.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/rancho.jpg"), filename: "rancho.jpg")
business2.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/rancho2.jpg"), filename: "rancho2.jpg")
business2.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/ranchomap.png"), filename: "ranchomap.png")

business3 = Business.create!(name: "Smokin Woods BBQ", address: "4307 Telegraph Ave", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 423-8634", category:"Barbeque", website:"https://www.smokinwoodsbbq.com", lat: 37.831919065169, lng: -122.26410305981324, price:"$$", hours: "12:00 PM-09:00 PM")
business3.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/smokinwoods2.jpg"), filename: "smokinwoods2.jpg")
business3.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/smokinwoods.jpg"), filename: "smokinwoods.jpg")
business3.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/smokinwoods3.jpg"), filename: "smokinwoods3.jpg")
business3.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/smokinwoodsmap.png"), filename: "smokinwoodsmap.png")

business4 = Business.create!(name: "Kansai", address: "4345 Telegraph Ave", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 658-7273", category:"Japanese", website:"https://www.orderkansai.com", lat: 37.83200063948505, lng: -122.26393759431681, price:"$", hours: "11:30 AM-11:30 PM")
business4.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/kansai.jpg"), filename: "kansai.jpg")
business4.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/kansai2.jpg"), filename: "kansai2.jpg")
business4.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/kansai3.jpg"), filename: "kansai3.jpg")
business4.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/kansaimap.png"), filename: "kansaimap.png")

business5 = Business.create!(name: "L & S Fish & Chips", address: "326 E 18th St", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 625-1700", category:"Seafood", website:"http://www.louisianafishandchips.net/", lat: 37.79970435200378, lng: -122.25139858853203, price:"$", hours: "12:00 PM-06:30 PM")
business5.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/lns4.jpg"), filename: "lns4.jpg")
business5.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/lns3.jpg"), filename: "lns3.jpg")
business5.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/lns.jpg"), filename: "lns.jpg")
business5.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/lnsmap.png"), filename: "lnsmap.png")

business6 = Business.create!(name: "Monster Pho", address: "360 40th St", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 788-4459", category:"Vietnamese", website:"https://www.monsterpho.com", lat: 37.8308727322662, lng: -122.2577183573041, price:"$", hours: "11:00 AM-08:00 PM")
business6.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/monsterpho4.jpg"), filename: "monsterpho4.jpg")
business6.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/monsterpho2.jpg"), filename: "monsterpho2.jpg")
business6.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/monsterpho.jpg"), filename: "monsterpho.jpg")
business6.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/monsterphomap.png"), filename: "monsterphomap.png")

business7 = Business.create!(name: "Jong Ga House", address: "372 Grand Ave", city: "Oakland", state: "CA", zip_code: 94610, phone_number: "(510) 444-7658", category:"Korean", website:"https://www.jonggahouse.com", lat: 37.80912742696728, lng: -122.254985730861, price:"$$", hours: "11:00 AM-11:00 PM")
business7.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/jongga4.jpg"), filename: "jongga4.jpg")
business7.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/jongga.jpg"), filename: "jongga.jpg")
business7.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/jongga3.jpg"), filename: "jongga3.jpg")
business7.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/jonggamap.png"), filename: "jonggamap.png")

business8 = Business.create!(name: "Mad Oak", address: "135 12th St", city: "Oakland", state: "CA", zip_code: 94607, phone_number: "(510) 843-7416", category:"Bars", website:"https://www.madoakbar.com", lat: 37.80006416808729, lng: -122.26469191551965, price:"$$", hours: "03:00 PM-11:30 PM")
business8.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/madoak4.jpg"), filename: "madoak4.jpg")
business8.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/madoak.jpg"), filename: "madoak.jpg")
business8.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/madoak2.jpg"), filename: "madoak2.jpg")
business8.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/madoakmap.png"), filename: "madoakmap.png")

business9 = Business.create!(name: "World Famous Hotboys", address: "1601 San Pablo Ave", city: "Oakland", state: "CA", zip_code: 94612, phone_number: "(510) 000-0000", category:"Burgers", website:"https://www.worldfamoushotboys.com", lat: 37.8066309466293, lng: -122.27223291736733, price:"$$", hours: "11:00 AM-09:00 PM")
business9.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/hotboys4.jpg"), filename: "hotboys4.jpg")
business9.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/hotboys.jpg"), filename: "hotboys.jpg")
business9.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/hotboys3.jpg"), filename: "hotboys3.jpg")
business9.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/hotboysmap.png"), filename: "hotboysmap.png")

business10 = Business.create!(name: "Yokee Milk Tea", address: "1728 Franklin St", city: "Oakland", state: "CA", zip_code: 94612, phone_number: "(510) 836-3288", category:"Milk tea", website:"https://www.yokee.business.site", lat: 37.8067426065941, lng: -122.26810218853186, price:"$", hours: "11:00 AM-06:00 PM")
business10.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/yokee4.jpg"), filename: "yokee4.jpg")
business10.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/yokee2.jpg"), filename: "yokee2.jpg")
business10.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/yokee3.jpg"), filename: "yokee3.jpg")
business10.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/yokeemap.png"), filename: "yokeemap.png")

business11 = Business.create!(name: "Tacos El Gordo", address: "4201 International Blvd", city: "Oakland", state: "CA", zip_code: 94601, phone_number: "(510) 501-5103", category:"Tacos", website:"https://www.elgordobayarea.com", lat: 37.772695507925334, lng: -122.2159801020264, price:"$", hours: "06:00 PM-11:30 PM")
business11.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/gordo4.jpg"), filename: "gordo4.jpg")
business11.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/gordo2.jpg"), filename: "gordo2.jpg")
business11.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/gordo3.jpg"), filename: "gordo3.jpg")
business11.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/gordomap.png"), filename: "gordomap.png")

business12 = Business.create!(name: "Farmhouse Kitchen Thai Cuisine", address: "336 Water St", city: "Oakland", state: "CA", zip_code: 94607, phone_number: "(510) 419-0541", category:"Thai", website:"https://farmhousethai.com/oakland/", lat: 37.79439751978787, lng: -122.27544737319042, price:"$$", hours: "11:30 AM-09:30 PM")
business12.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/farmhouse4.jpg"), filename: "farmhouse4.jpg")
business12.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/farmhouse2.jpg"), filename: "farmhouse2.jpg")
business12.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/farmhouse3.jpg"), filename: "farmhouse3.jpg")
business12.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/farmhousemap.png"), filename: "farmhousemap.png")

business13 = Business.create!(name: "MAMA Oakland", address: "388 Grand Ave", city: "Oakland", state: "CA", zip_code: 94610, phone_number: "(510) 974-6372", category:"Italian", website:"https://www.mama-oakland.com", lat: 37.80921062565971, lng: -122.25453175969645, price:"$$$", hours: "05:00 PM-09:00 PM")
business13.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/mama5.jpg"), filename: "mama5.jpg")
business13.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/mama2.jpg"), filename: "mama2.jpg")
business13.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/mama3.jpg"), filename: "mama3.jpg")
business13.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/mamamap.png"), filename: "mamamap.png")

business14 = Business.create!(name: "Commis", address: "3859 Piedmont Ave", city: "Oakland", state: "CA", zip_code: 94611, phone_number: "(510) 653-3902", category:"American", website:"https://www.commisrestaurant.com", lat: 37.82486929710936, lng: -122.25489403086075, price:"$$$$", hours: "05:30 PM-11:30 PM")
business14.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/commis4.jpg"), filename: "commis4.jpg")
business14.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/commis2.jpg"), filename: "commis2.jpg")
business14.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/commis3.jpg"), filename: "commis3.jpg")
business14.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/commismap.png"), filename: "commismap.png")

business15 = Business.create!(name: "Portal", address: "1611 2nd Ave", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 663-7678", category:"American", website:"https://www.orderportaloakland.com", lat: 37.799459409894325, lng: -122.2546341038738, price:"$$", hours: "11:00 AM-09:00 PM")
business15.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/portal4.jpg"), filename: "portal4.jpg")
business15.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/portal2.jpg"), filename: "portal2.jpg")
business15.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/portal3.jpg"), filename: "portal3.jpg")
business15.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/portalmap.png"), filename: "portalmap.png")

business16 = Business.create!(name: "Q's Halal", address: "2306 Central Ave", city: "Alameda", state: "CA", zip_code: 94501, phone_number: "(510) 227-5870", category:"Mediterranean", website:"https://www.qhalal.com", lat: 37.76464146540329, lng: -122.243935475039, price:"$", hours: "11:00 AM-08:00 PM")
business16.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/halal4.jpg"), filename: "halal4.jpg")
business16.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/halal2.jpg"), filename: "halal2.jpg")
business16.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/halal3.jpg"), filename: "halal3.jpg")
business16.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/halalmap.png"), filename: "halalmap.png")

business17 = Business.create!(name: "Burma Superstar", address: "1345 Park St", city: "Alameda", state: "CA", zip_code: 94501, phone_number: "(510) 522-6200", category:"Burmese", website:"https://www.burmasuperstar.co", lat: 37.763888930077925, lng: -122.24363844620362, price:"$$", hours: "11:30 AM-08:30 PM")
business17.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/burma4.jpg"), filename: "burma4.jpg")
business17.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/burma2.jpg"), filename: "burma2.jpg")
business17.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/burma3.jpg"), filename: "burma3.jpg")
business17.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/burmamap.png"), filename: "burmamap.png")

business18 = Business.create!(name: "Izza", address: "4419 Telegraph Ave", city: "Oakland", state: "CA", zip_code: 94609, phone_number: "(510) 607-7361", category:"Japanese", website:"https://www.izza.menu11.com", lat: 37.83266725896303, lng: -122.26384788853136, price:"$$", hours: "11:30 AM-11:30 PM")
business18.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/izza4.jpg"), filename: "izza4.jpg")
business18.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/izza2.jpg"), filename: "izza2.jpg")
business18.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/izza3.jpg"), filename: "izza3.jpg")
business18.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/izzamap.png"), filename: "izzamap.png")

business19 = Business.create!(name: "Annapurna Restaurant and Bar", address: "948 Clay St", city: "Oakland", state: "CA", zip_code: 94607, phone_number: "(510) 250-9696", category:"Indian", website:"https://www.annapurnaoakland.com", lat: 37.80244306885019, lng: -122.27523078853197, price:"$$", hours: "11:00 AM-09:30 PM")
business19.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/annapurna4.jpg"), filename: "annapurna4.jpg")
business19.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/annapurna2.jpg"), filename: "annapurna2.jpg")
business19.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/annapurna3.jpg"), filename: "annapurna3.jpg")
business19.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/annapurnamap.png"), filename: "annapurnamap.png")

business20 = Business.create!(name: "Banh Mi Ba Le", address: "1909 International Blvd", city: "Oakland", state: "CA", zip_code: 94606, phone_number: "(510) 261-9800", category:"Vietnamese", website:"http://banh-mi-ba-le.cafe-inspector.com/", lat: 37.78630872314333, lng: -122.2409487020285, price:"$", hours: "07:30 AM-03:00 PM")
business20.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/bale4.jpg"), filename: "bale4.jpg")
business20.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/bale2.jpg"), filename: "bale2.jpg")
business20.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/bale3.jpg"), filename: "bale3.jpg")
business20.photos.attach(io: open("https://smackin-seeds.s3.us-west-1.amazonaws.com/balemap.png"), filename: "balemap.png")


# ----- reviews
review1 = Review.create!(rating: 5, body: "Best burgers I've ever had! It's a little pricey for a burger but it is so worth it. I had the bacon cheesy trueburger. The bacon was perfect, and the bun complimented everything so well. Would definitely come back again.", user_id: user1.id, business_id: business1.id)
review2 = Review.create!(rating: 3, body: "We went here for happy hour. It's nothing special, but the price was really good for the amount of food and quality. I would say come here with some friends after hanging out, but not for a special occassion dinner or anything. Big plus for staying open pretty late.", user_id: user1.id, business_id: business4.id)
review3 = Review.create!(rating: 3, body: "Can't beat the BBQ here. As authentic as you can get. However, the service is extremely lacking. Granted, they were busy and seemed to be short staff. I would come back, but might order takeout instead.", user_id: user2.id, business_id: business3.id)
review4 = Review.create!(rating: 5, body: "The BEST cheese steak fries in the town! They have a big menu, but come here for the fries. You will not be disappointed. Add shrimp if you'd like, they use black tiger shrimp which is BOMB.", user_id: user2.id, business_id: business5.id)
review5 = Review.create!(rating: 2, body: "It was meh. There's plenty of better pho spots in Oakland. We only came here for lunch to try it out since none of us had eaten here before.", user_id: user3.id, business_id: business6.id)
review6 = Review.create!(rating: 4, body: "Love this place. It's an above average AYCE Korean BBQ spot. You can tell their meat is of higher quality than other KBBQ spots around the area. Only reason it wasn't a 5 was because parking is really hit and miss here, and also because they're so busy, the service isn't the greatest but they're really nice.", user_id: user3.id, business_id: business7.id)
review7 = Review.create!(rating: 5, body: "TrueBurger is a true gem. It's a tiny burger joint that is pretty easy to miss. Make no mistake, this place makes some damn good burgers. I love the bacon cheesy trueburger. The bacon is so chewy and the bread's softness compliments it so well. They put garlic mayo on their burgers, which is a first for me and makes it so much more delicious.", user_id: user4.id, business_id: business1.id)
review8 = Review.create!(rating: 4, body: "Conveniently located by Lake Merritt where you can grab a burrito or taco to enjoy outside. However, my favorite here is their steak nachos! They don't skimp on the toppings and every bite is layered with the perfect mix of flavors.", user_id: user4.id, business_id: business2.id)
review9 = Review.create!(rating: 1, body: "The food here is hella good! But they went up on their prices and it's ridiculously expensive now. $3 for a taco. $17.50 for steak and shrimp fries. $11 for a burrito with meat. Beans and rice. That is hella tiny. It's a no thank you for me from here on out. I use to eat here almost weekly. Time to find another spot.", user_id: user1.id, business_id: business2.id)
review10 = Review.create!(rating: 4, body: "We got a complimentary Japanese salad, chicken karage, and a regular and black garlic tonkatsu. Chicken was juicy, but maybe could have been a bit more crunchy. The sauce it came with was nice and fit well, like a citrusy aoili. The regular tonkatsu tasted a bit like sweet corn due to the pieces of corn in there.", user_id: user1.id, business_id: business18.id)
review11 = Review.create!(rating: 3, body: "We enjoyed a decent meal, but certainly have had better. The goat curry was tasty but mostly bones, barely any meat. The lamb Vindaloo was lacking something in flavor and consistency, though decent portions. The mixed tandoor came with 2 small pieces of shrimp, a piece of lamb, and mostly chicken -- all of which were flavorful, but dry.", user_id: user1.id, business_id: business19.id)
review12 = Review.create!(rating: 5, body: "I got the #2 and it was only $5! Banh mi prices have been going up in the bay area and it is pretty hard to find banh mi in this price range nowadays! They also put a good amount of meat in their sandwiches, which I really appreciate!", user_id: user1.id, business_id: business20.id)
review13 = Review.create!(rating: 5, body: "The broth in this pho is sooo goood! Not only was it great food but it was really quick! We did not have to wait longer than 10 minutes after ordering. The staff here are friendly, attentive, and quick.", user_id: user1.id, business_id: business6.id)
review14 = Review.create!(rating: 5, body: "Came with a very large group (~20 people) for AYCE and they were very active and flexible with splitting people into groups of varying sizes, which is what we wanted. The food was really good too. I really liked the LA Style Beef Short Ribs. The Beef Brisket and various Pork Bellies were also good.", user_id: user1.id, business_id: business7.id)
review15 = Review.create!(rating: 4, body: "Really solid, (majority) open outdoor bar here in Oakland. Came here multiple times with groups of friends and always have a great time. It gets pretty packed here so of course the volume comes with that, but it's a social place so you expect that. They usually have pop-up food shops that they rotate every few months", user_id: user1.id, business_id: business8.id)
review16 = Review.create!(rating: 5, body: "The fried chicken here is very flavorful and when you ask for very spicy, it will keep your stomach warm for hours. I love hot and spicy and upped it to the very hot and spicy and was not disappointed.  I can handle a lot of heat and would not recommend their hottest level unless your soul needs the heat of the sun to revitalize a frost bitten aura.", user_id: user1.id, business_id: business9.id)
review17 = Review.create!(rating: 4, body: "The quality of the drinks here are really good! The bartenders put a lot of craft into their drinks and the prices are decent as well! The upstairs rooftop area is really unique because of the screen that is projected on the wall adjacent to the next building. Really good for sport games. The crowd is really friendly as well! Definitely recommend to check out this spot if you're in Oakland.", user_id: user2.id, business_id: business8.id)
review18 = Review.create!(rating: 5, body: "The wait is a little long but worth it. I had ordered a chicken tender combo and Mac & cheese fritters as a side. I ended up getting no fries so I asked about my order which was quickly fixed with a smile and joke. I love laid back places with a fire music playlist and dope vibes. Will be back.", user_id: user2.id, business_id: business9.id)
review19 = Review.create!(rating: 4, body: "Yokee is easily one of my favorite boba spots in the bay. I love how they use fresh ingredients in their drinks (you can see them make it in front of you). They are also super quick with creating the drinks (consistently ready in ~10 min after you call in to order even though it's usually very busy).", user_id: user2.id, business_id: business10.id)
review20 = Review.create!(rating: 4, body: "Hands down my favorite taco truck in Oakland. I've been coming here for years, even before the taco truck and the truck pulling the trailer got upgraded :) Although the prices have gone up, the food has stayed still very very good.", user_id: user2.id, business_id: business11.id)
review21 = Review.create!(rating: 4, body: "These place is super cute and good. Spring rolls are to die for. Also got the lobster pad thai. It is not amazing for the price. Lobster was very fishy and mushy which I did not like. Rather order the pad thai without lobster. Other than that great place, great service.", user_id: user2.id, business_id: business12.id)
review22 = Review.create!(rating: 5, body: "Best dinner experience in oak town! This place needs some hype for sure. It was very reasonable for the flavor and experience. Staff were super nice. We tried some pasta Their 3 course dinner menu is very nice. They have plenty of street parking.", user_id: user2.id, business_id: business13.id)
review23 = Review.create!(rating: 5, body: "Commis is a two star Michelin and is the only Michelin restaurant. The parking at 5PM on a Saturday wasn't bad at all considering they only have street parking available. They have a bar that opens at 5 for walk ins and gets filled up right away. The staff, the  service and food was great. I would definitely come back here.", user_id: user2.id, business_id: business14.id)
review24 = Review.create!(rating: 4, body: "Beautiful back patio with great open air hang out space. Perfect place in Oakland when weather is nice. Sliders are amazing, beer selection solid.", user_id: user2.id, business_id: business15.id)
review25 = Review.create!(rating: 4, body: "What a cute place! The fresh fruit teas were so refreshing and delicious. I love the blended ice in the grapefruit green tea--it was melt in your mouth and not too icey! We called in over the phone to order and pick up, which i would totally recommend doing due to the limited street parking.", user_id: user3.id, business_id: business10.id)
review26 = Review.create!(rating: 4, body: "El pastor tacos with everything and an horchata. You can thank me later. I've been coming here for 3 years and it's by far the best taco truck on international! Friendly service and amazing food.", user_id: user3.id, business_id: business11.id)
review27 = Review.create!(rating: 5, body: "The food and service never disappoints. We came here on a Sunday afternoon for lunch without reservations and fortunately we didn't have wait very long. The crispy crusted prawns was one of our favorites. The wagyu beef rolls were excellent too.  You really can't go wrong at this place.", user_id: user3.id, business_id: business12.id)
review28 = Review.create!(rating: 5, body: "My favorite restaurant in Oakland and maybe the best. Ever changing three course menu, eclectic and thoughtful wine list. Killer prices too, so reasonable for the quality. I have been twice and both times were lovely.", user_id: user3.id, business_id: business13.id)
review29 = Review.create!(rating: 5, body: "This place deserves its 2 Michelin stars. The servers were amazing and there wasn't a single dish I didn't like. Even the desserts were exceptionally unique and larger on the serving size than I expected (which was a plus). I left extremely satisfied and would, without hesitation, dine here again!", user_id: user3.id, business_id: business14.id)
review30 = Review.create!(rating: 4, body: "This place has a great fun atmosphere. There is a large outdoor patio with heat lamps. The staff is very friendly and gave our group separate checks. I ordered the mini sliders and fried Brussel sprouts. Both were really good. They only serve wine and beer even though they have a bar when you first walk in. There was street parking but no parking lot.", user_id: user3.id, business_id: business15.id)
review31 = Review.create!(rating: 5, body: "This place is an absolute gem! It doesn't look like much from the outside, but their food is amazing. Ok, they are a little more expensive than I would like to pay, but it's a great little treat for me when I am able to eat here.", user_id: user3.id, business_id: business16.id)
review32 = Review.create!(rating: 5, body: "Burma superstar takes food to a new level. This is our place for all the special celebrations or when you're feeling fancy. The vibe is classy and a bit more on the upscale side, but delicious and worth the experience.", user_id: user3.id, business_id: business17.id)
review33 = Review.create!(rating: 5, body: "So glad I found this little gem in Alameda! Great service, no line and absolutely delicious Mediterranean food. I ordered the falafel wrap with waffle fries and a drink. I've never had such crunchy, crispy and golden waffle fries! Honestly, the star of the show.", user_id: user4.id, business_id: business16.id)
review34 = Review.create!(rating: 4, body: "They have great lunch combos and outdoor dining (covered)! I enjoyed my tea leaf salad with sambusa soup. Portion size was good and I had enough leftovers. I also really liked their milk tea. Service was fast and friendly and I would get lunch here again.", user_id: user4.id, business_id: business17.id)
review35 = Review.create!(rating: 4, body: "Everything here was of such GREAT quality. Fresh, great sashimi (chefs choice sashimi moriawase). Fish was a good size and their salmon belly was especially great and melts in your mouth.", user_id: user4.id, business_id: business18.id)
review36 = Review.create!(rating: 5, body: "Excellent food at reasonable prices fairly large menu with something for everyone. I had the Salmon was really delicious moist and well seasoned veggies were also wonderful. Service was attentive and everyone made us feel at home. Thank you will return", user_id: user4.id, business_id: business19.id)
review37 = Review.create!(rating: 5, body: "If your Banh Mi costs you more than $6, you're at the wrong place! You need to go to Banh Mi Ba Le and get yourself a Banh Mi for less than $5! This is the most authentic, family friendly, mom and pop shop in Oakland. I love going to this place for a quick bite & delicious bite and a refreshing drink.", user_id: user4.id, business_id: business20.id)
review38 = Review.create!(rating: 3, body: "The food is excellent--outstanding. You can tell they take great care in the preparation of the food. Customers on the other hand...well...Yes. It's tough in the service industry now, but that doesn't mean you can just treat the customers who walk into your restaurant like they've inconvenienced you by coming to eat in your restaurant.", user_id: user4.id, business_id: business3.id)
review39 = Review.create!(rating: 4, body: "I've been craving sushi and Kansai was deeply satisfying! We had the 49er and dragon rolls, as well as the fatty tuna sashimi, and unagi and tuna nigiri. So fresh, so flavorful. The sashimi tasted like pats of butter, but in a good way!", user_id: user4.id, business_id: business4.id)
review40 = Review.create!(rating: 3, body: "I'm only rating 3 stars because the chicken on my meal tasted old as if it were cooked a day or two prior. It actually made me never want chicken again. It was bad. The shrimp was good everything else was great. That chicken is offensive.", user_id: user4.id, business_id: business5.id)

User.all.each { |u| u.set_num_reviews }