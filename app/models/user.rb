class User < ApplicationRecord
    has_secure_password
   
    attribute :cooked_dishes_count

    has_many :user_recipes, dependent: :destroy
    has_many :recipes, through: :user_recipes
end
