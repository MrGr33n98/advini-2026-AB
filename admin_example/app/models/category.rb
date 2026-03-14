class Category < ApplicationRecord
  self.implicit_order_column = "created_at"
  has_many :products, dependent: :nullify
  belongs_to :parent, class_name: 'Category', optional: true
  has_many :subcategories, class_name: 'Category', foreign_key: 'parent_id', dependent: :destroy
  
  validates :name, presence: true, uniqueness: true
end
