class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products, id: :uuid do |t|
      t.string :name, null: false
      t.references :vendor, type: :uuid, null: false, foreign_key: true
      t.references :category, type: :uuid, null: false, foreign_key: true
      t.string :slug, null: false
      t.text :short_description
      t.text :full_description
      t.decimal :average_rating, precision: 3, scale: 2, default: 0.0
      t.integer :reviews_count, default: 0
      t.decimal :base_price_monthly, precision: 10, scale: 2
      t.decimal :base_price_yearly, precision: 10, scale: 2
      t.boolean :has_free_trial, default: false
      t.boolean :is_verified, default: false
      t.boolean :is_top_rated, default: false

      t.timestamps
    end
    add_index :products, :slug, unique: true
  end
end
