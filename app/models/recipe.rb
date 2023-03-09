class Recipe < ApplicationRecord
    has_many :user_recipes
    has_many :users, through: :user_recipes

    validates :title, :ing1, :meas1, presence: true
end
