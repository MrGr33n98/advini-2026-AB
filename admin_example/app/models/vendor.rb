class Vendor < ApplicationRecord
  self.implicit_order_column = "created_at"
  has_many :products, dependent: :destroy
  
  validates :name, presence: true
end
