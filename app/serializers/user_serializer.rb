class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :cooked_dishes_count
end
