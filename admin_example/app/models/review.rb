class Review < ApplicationRecord
  self.implicit_order_column = "created_at"
  belongs_to :product
  belongs_to :user
  
  validates :rating, presence: true, inclusion: { in: 1..5 }
end
