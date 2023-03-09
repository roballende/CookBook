class RemoveUnusedTablesFromDb < ActiveRecord::Migration[7.0]
  def change
    drop_table :profiles
    drop_table :cookbooks
    drop_table :reviews

    add_column :user_recipes, :rating, :integer, null: false, default: 0
    add_column :user_recipes, :comment, :text
  end
end