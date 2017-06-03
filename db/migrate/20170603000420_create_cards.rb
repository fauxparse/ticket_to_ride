class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.belongs_to :list, polymorphic: true
      t.integer :position, required: true
      t.string :color, limit: 10, required: true
    end
  end
end
