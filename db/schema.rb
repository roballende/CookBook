# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_10_000717) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "recipes", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.string "category"
    t.string "origin"
    t.string "directions"
    t.string "ing1"
    t.string "ing2"
    t.string "ing3"
    t.string "ing4"
    t.string "ing5"
    t.string "ing6"
    t.string "ing7"
    t.string "ing8"
    t.string "ing9"
    t.string "ing10"
    t.string "ing11"
    t.string "ing12"
    t.string "ing13"
    t.string "ing14"
    t.string "ing15"
    t.string "ing16"
    t.string "ing17"
    t.string "ing18"
    t.string "ing19"
    t.string "ing20"
    t.string "meas1"
    t.string "meas2"
    t.string "meas3"
    t.string "meas4"
    t.string "meas5"
    t.string "meas6"
    t.string "meas7"
    t.string "meas8"
    t.string "meas9"
    t.string "meas10"
    t.string "meas11"
    t.string "meas12"
    t.string "meas13"
    t.string "meas14"
    t.string "meas15"
    t.string "meas16"
    t.string "meas17"
    t.string "meas18"
    t.string "meas19"
    t.string "meas20"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_recipes", force: :cascade do |t|
    t.boolean "cooked", default: false, null: false
    t.boolean "favorite", default: false, null: false
    t.bigint "user_id", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_user_recipes_on_recipe_id"
    t.index ["user_id"], name: "index_user_recipes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_recipes", "recipes"
  add_foreign_key "user_recipes", "users"
end
