# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

user1 = User.create!(first_name: 'John', last_name: 'Smith', email:'johnsmith@email.com', password: 'password', zip_code: 94606)
user2 = User.create!(first_name: 'Rick', last_name: 'Sanchez', email:'ricksanchez@email.com', password: 'password', zip_code: 94500)
user3 = User.create!(first_name: 'Steph', last_name: 'Curry', email:'stephcurry@email.com', password: 'password', zip_code: 94601)
user4 = User.create!(first_name: 'Peter', last_name: 'Griffin', email:'petergriffin@email.com', password: 'password', zip_code: 94616)
user5 = User.create!(first_name: 'Demo', last_name: 'User', email:'demouser@email.com', password: 'password', zip_code: 94619)
