class Recipe < ApplicationRecord
    has_many :user_recipes
    has_many :users, through: :user_recipes

    validates :title, :ing1, :meas1, presence: true

    def publish
        pubnub = Pubnub.new(
            subscribe_key: 'sub-c-59f77cc3-0318-40e5-9c19-3e6e16c9414d',
            publish_key: "pub-c-ebd529c1-b353-4bf0-ad9e-2cad24822c77",
            uuid: "myUniqueUUID"
        )
        pubnub.publish(
            channel: 'recipe',
            message: { recipe: self }
        )
    end
end
