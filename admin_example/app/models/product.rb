class Product < ApplicationRecord
  self.implicit_order_column = "created_at"
  belongs_to :vendor
  belongs_to :category
  has_many :reviews, dependent: :destroy
  
  validates :name, presence: true
  validates :slug, presence: true, uniqueness: true
end
