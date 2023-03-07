class User < ApplicationRecord
    has_secure_password
    # has_one :cookbook
    # has_one :profile
    # has_many :user_recipes
    # has_many :recipes, through: :user_recipes
    has_many :reviews
    has_many :recipes, through: :reviews
end
