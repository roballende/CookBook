class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description
  # has_one :user
  # has_one :recipe
end
