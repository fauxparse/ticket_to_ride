class CreateDiscardPiles < ActiveRecord::Migration[5.1]
  def change
    create_table :discard_piles do |t|
      t.belongs_to :game
    end
  end
end
