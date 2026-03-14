class CreateVendors < ActiveRecord::Migration[7.1]
  def change
    create_table :vendors, id: :uuid do |t|
      t.string :name, null: false
      t.string :logo_url
      t.string :website_url
      t.boolean :is_verified, default: false

      t.timestamps
    end
  end
end
