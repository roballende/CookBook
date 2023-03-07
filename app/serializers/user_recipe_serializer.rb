class UserRecipeSerializer < ActiveModel::Serializer
  attributes :id, :cooked
  has_one :user
  has_one :recipe
end
