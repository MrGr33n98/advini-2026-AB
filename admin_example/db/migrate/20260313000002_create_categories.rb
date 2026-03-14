class CreateCategories < ActiveRecord::Migration[7.1]
  def change
    create_table :categories, id: :uuid do |t|
      t.string :name, null: false
      t.string :icon_name
      t.uuid :parent_id
      t.integer :products_count, default: 0

      t.timestamps
    end
    add_index :categories, :parent_id
  end
end
