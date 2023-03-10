class UserRecipeSerializer < ActiveModel::Serializer
  attributes :id, :cooked, :favorite, :user_id, :recipe_id
  has_one :user
  has_one :recipe
end
