class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image
      t.string :category
      t.string :origin
      t.string :directions
      t.string :ing1
      t.string :ing2
      t.string :ing3
      t.string :ing4
      t.string :ing5
      t.string :ing6
      t.string :ing7
      t.string :ing8
      t.string :ing9
      t.string :ing10
      t.string :ing11
      t.string :ing12
      t.string :ing13
      t.string :ing14
      t.string :ing15
      t.string :ing16
      t.string :ing17
      t.string :ing18
      t.string :ing19
      t.string :ing20
      t.string :meas1
      t.string :meas2
      t.string :meas3
      t.string :meas4
      t.string :meas5
      t.string :meas6
      t.string :meas7
      t.string :meas8
      t.string :meas9
      t.string :meas10
      t.string :meas11
      t.string :meas12
      t.string :meas13
      t.string :meas14
      t.string :meas15
      t.string :meas16
      t.string :meas17
      t.string :meas18
      t.string :meas19
      t.string :meas20

      t.timestamps
    end
  end
end
