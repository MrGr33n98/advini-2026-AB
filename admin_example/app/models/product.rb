class Product < ApplicationRecord
  self.implicit_order_column = "created_at"
  belongs_to :vendor
  belongs_to :category
  has_many :reviews, dependent: :destroy
  
  enum status: { pending: 0, approved: 1, cancelled: 2 }

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: true
end
