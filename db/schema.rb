# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170604230453) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "list_type"
    t.bigint "list_id"
    t.integer "position"
    t.string "color", limit: 10
    t.index ["list_type", "list_id"], name: "index_cards_on_list_type_and_list_id"
  end

  create_table "decks", force: :cascade do |t|
    t.bigint "game_id"
    t.index ["game_id"], name: "index_decks_on_game_id"
  end

  create_table "discard_piles", force: :cascade do |t|
    t.bigint "game_id"
    t.index ["game_id"], name: "index_discard_piles_on_game_id"
  end

  create_table "face_ups", force: :cascade do |t|
    t.bigint "game_id"
    t.index ["game_id"], name: "index_face_ups_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "players_count", default: 0
    t.string "board_name", limit: 64, default: "america"
  end

  create_table "players", force: :cascade do |t|
    t.bigint "game_id"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_players_on_game_id"
  end

  add_foreign_key "players", "games", on_delete: :cascade
end
