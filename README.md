# README
Cookbook App

This is a recipe app built with React on the frontend and Ruby on Rails on the backend. Users can view recipes from the database, like them, mark them as cooked, add them to their cookbook, and create new recipes. The app also includes user authentication and authorization functionality.

Backend
The backend is built with Ruby on Rails and includes the following endpoints:

POST /signup: Creates a new user account
GET /me: Returns the current user
POST /signin: Logs in a user
DELETE /signout: Logs out a user
GET /recipes: Returns a list of all recipes
GET /recipes/:id: Returns a single recipe
GET /recipes/search: Searches for recipes based on query parameters
POST /recipes: Creates a new recipe
PUT /recipes/:id: Updates an existing recipe
DELETE /recipes/:id: Deletes a recipe
GET /users: Returns a list of all users
GET /users/:id: Returns a single user
GET /users/:id/other_users: Returns a list of other users
The backend also uses the following gems:

bcrypt: Password hashing and authentication
pg: PostgreSQL database driver
puma: Web server
active_model_serializers: Serializes JSON data
rest-client: Sends HTTP requests

Frontend
The frontend is built with React and includes the following packages:

react-router-dom: Handles client-side routing
pubnub: Real-time data synchronization
tailwindcss: Styling framework
react-hot-toast: Displays notifications



Installation:


Clone the repository:
shell
$ git clone https://github.com/roballende/CookBook


Install the backend dependencies:
shell
$ cd recipe-app
$ bundle install


Set up the database:
ruby
$ rails db:create
$ rails db:migrate
$ rails db:seed


Start the backend server:
ruby
$ rails s


Install the frontend dependencies:
shell
$ cd client
$ npm install


Start the frontend server:
ruby
$ npm start

The app should now be running at http://localhost:4000.
