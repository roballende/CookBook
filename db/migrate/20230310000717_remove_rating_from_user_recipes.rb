class RemoveRatingFromUserRecipes < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_recipes, :rating
    remove_column :user_recipes, :comment
  end
end
