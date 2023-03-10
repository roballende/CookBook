require 'rest-client'
require 'faker'

UserRecipe.destroy_all
User.destroy_all
Recipe.destroy_all 

puts "🌱 Seeding data..."

ActiveRecord::Base.transaction do
  
    puts "getting recipes"
    # Make a GET request to the API
    recipes = RestClient.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    

    # Parse the JSON response
    recipes_data = JSON.parse(recipes)["meals"]
 

    # Iterate through the array of parks
    recipes_data.each do |recipe|
        image = recipe["strMealThumb"]
        # hazard = hazards_data.find { |h| h["parkCode"] == park["parkCode"] }
        # img_urls = park["images"].map { |image| image["url"] }
        # activities = park["activities"].map { |activity| activity["name"] }
        # Create a new recipe with the data from the API
        recipe = Recipe.create(
            title: recipe["strMeal"],
            image: image ? image : nil,
            category: recipe["strCategory"], 
            origin: recipe["strArea"],
            directions: recipe["strInstructions"],
            ing1: recipe["strIngredient1"],
            ing2: recipe["strIngredient2"],
            ing3: recipe["strIngredient3"],
            ing4: recipe["strIngredient4"],
            ing5: recipe["strIngredient5"],
            ing6: recipe["strIngredient6"],
            ing7: recipe["strIngredient7"],
            ing8: recipe["strIngredient8"],
            ing9: recipe["strIngredient9"],
            ing10: recipe["strIngredient10"],
            ing11: recipe["strIngredient11"],
            ing12: recipe["strIngredient12"],
            ing13: recipe["strIngredient13"],
            ing14: recipe["strIngredient14"],
            ing15: recipe["strIngredient15"],
            ing16: recipe["strIngredient16"],
            ing17: recipe["strIngredient17"],
            ing18: recipe["strIngredient18"],
            ing19: recipe["strIngredient19"],
            ing20: recipe["strIngredient20"],
            meas1: recipe["strMeasure1"],
            meas2: recipe["strMeasure2"],
            meas3: recipe["strMeasure3"],
            meas4: recipe["strMeasure4"],
            meas5: recipe["strMeasure5"],
            meas6: recipe["strMeasure6"],
            meas7: recipe["strMeasure7"],
            meas8: recipe["strMeasure8"],
            meas9: recipe["strMeasure9"],
            meas10: recipe["strMeasure10"],
            meas11: recipe["strMeasure11"],
            meas12: recipe["strMeasure12"],
            meas13: recipe["strMeasure13"],
            meas14: recipe["strMeasure14"],
            meas15: recipe["strMeasure15"],
            meas16: recipe["strMeasure16"],
            meas17: recipe["strMeasure17"],
            meas18: recipe["strMeasure18"],
            meas19: recipe["strMeasure19"],
            meas20: recipe["strMeasure20"],
        )
    end

    puts "creating users"
    
    User1 = User.create(username: "tester1", password: "password1")
    User2 = User.create(username: "tester2", password: "password2")
    User3 = User.create(username: "tester3", password: "password3")
end

puts "✅ Done seeding!"