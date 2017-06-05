class AddBoardNameToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :board_name, :string, limit: 64, default: 'america'
  end
end
