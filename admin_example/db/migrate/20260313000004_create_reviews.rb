class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews, id: :uuid do |t|
      t.references :product, type: :uuid, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.text :content
      t.integer :rating
      t.integer :ease_of_use_rating
      t.integer :support_rating
      t.integer :value_rating
      t.integer :features_rating
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
