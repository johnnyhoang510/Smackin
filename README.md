# Welcome to Smackin'!

[Live Link](https://smackin.herokuapp.com/#/)

Smackin' is a fullstack, single page app clone of Yelp. Users will be able to utilize many familiar features, such as signing up, logging in, creating reviews, etc. 
<a href ="https://github.com/johnnyhoang510/Smackin"><img width="1300" alt="feature" src="https://user-images.githubusercontent.com/94396944/165564489-e07b7ef3-6da6-442c-96d8-ad54e1cba40d.png"></a>

## Technologies

Smackin' was built using the following technologies:
</br>
* <b>Frontend: React/Redux and JavaScript/JSX</b>
* <b>Backend: Ruby on Rails</b>
* <b>Database: PostgreSQL</b>
* <b>Design/Styling: HTML and CSS</b>
* <b>Image Hosting: AWS</b>
* <b>Third Party API: Google Maps JavaScript API</b>
* <b>Hosting: Heroku</b>

## Key Features

### User Authentication

* Users can signup a new account and/or login to an existing account
* Users can login as a demo user for quicker access around the site
* Errors are rendered in the event of inputting invalid credentials

![userauth](https://user-images.githubusercontent.com/94396944/165648518-5ea84d1d-3bfe-4a42-9c6f-0c57a3c4d919.gif)
</br>
</br>

### Reviews (Create, Read, Update, Delete)

* Users must be logged in to be able to write a new review, or edit/delete their existing reviews
* All users will be able to read through reviews for any business
* Errors will render if a rating or body of text aren't provided
* Submitted reviews will affect the business's overall rating, as well as any deleted reviews

![smackinreviews](https://user-images.githubusercontent.com/94396944/165649733-8b688e70-6246-4939-9bc5-1997374d039e.gif)
</br>
</br>

### Searchbar and Filters

* Users can search for businesses by category/name and also filter businesses by price
* Markers on the map will update according to any search query or filter
* Errors will render for an invalid search
* Users can click on any of the markers to be redirected to that business's show page

![searchfilters](https://user-images.githubusercontent.com/94396944/165652983-150775a3-8ffd-41fd-9c71-40e2ce66ff2d.gif)

Originally, the searching and filtering of businesses was done on the front-end. I decided I wanted users to be able to search for more than just the category and with the help of Ruby on Rails Active Record Queries, I was able to broaden the search in the backend to also include price and the name of the business. 

When this action hits, it will either send back a JSON object with filtered results or all the businesses if a query is not passed in. This approach will allow one action to handle multiple scenarios. Additionally, I wanted to address the N+1 query problem, so I utilized the Rails "includes" method for eager loading, limiting the amount of queries that need to be executed.
```ruby
    #businesses_controller.rb
    
    def index
        if params[:query]
            @businesses = Business.includes(:reviews)
                .where(
                "category ILIKE ? 
                OR name ILIKE ? 
                OR price ILIKE ?",
                "%#{params[:query]}%", "%#{params[:query]}%", "#{params[:query]}"
                )
            if @businesses.length > 0
                render :index
            else
                render json: ["No results for #{params[:query]} Oakland, CA"], status: 422
            end
        else
            @businesses = Business.includes(:reviews).all
            render :index
        end
    end
```
</br>
</br>

### Business Show Page

* Users can view each business's various information (hours, address, rating, etc.)
* Users must be logged in to create a new review
* Users can click on the map to get directions to the business, or be redirected to the business's website by clicking on the link

<img width="1371" alt="openclosed" src="https://user-images.githubusercontent.com/94396944/165822079-3f8d8fbb-a3b1-4d82-96c6-1831f591ae22.png">
</br>

I wanted to be able to dynamically show whether a business was open or not depending on the current time and day. In order to implement this feature, I first used a helper function convertTime(), which takes a time string parameter such as "11:30 AM-09:30 PM" and correctly converts both the opening and closing hours to military time. 

From there, I grabbed the hours and minutes of both of the times, and compared them to the current day's hours and minutes. The function will return a span element indicating whether it is open or closed, or null if the day passed in the parameter does not match the current day.

```js
checkOpenOrClosed(day) {
        let openingTime = this.convertTime(this.props.business.hours.split('-')[0]);
        let closingTime = this.convertTime(this.props.business.hours.split('-')[1]);

        let currentDate = new Date();
        
        let openingDate = new Date(currentDate.getTime());
        openingDate.setHours(openingTime.split(":")[0]);
        openingDate.setMinutes(openingTime.split(":")[1]);

        let closingDate = new Date(currentDate.getTime());
        closingDate.setHours(closingTime.split(":")[0]);
        closingDate.setMinutes(closingTime.split(":")[1]);

        let openText;
        let closedText;

        if (day === currentDate.getDay()) {
            if (openingDate < currentDate && closingDate > currentDate) {
                openText = <span id="open-now">Open now</span>
                return openText;
            } else {
                closedText = <span id="closed">Closed now</span>;
                return closedText;
            }
        } else {
            return null;
        }
    }
```

### Future Improvements

* User profile where they can view all of their reviews
* Allow users to upload photos when writing a review
* Have a search feature within the reviews index

