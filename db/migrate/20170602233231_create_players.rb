class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.belongs_to :game, foreign_key: { on_delete: :cascade }
      t.integer :position, required: true
      t.timestamps
    end

    change_table :games do |t|
      t.integer :players_count, required: true, default: 0
    end
  end
end
