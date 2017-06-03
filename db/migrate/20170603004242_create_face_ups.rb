class CreateFaceUps < ActiveRecord::Migration[5.1]
  def change
    create_table :face_ups do |t|
      t.belongs_to :game
    end
  end
end
