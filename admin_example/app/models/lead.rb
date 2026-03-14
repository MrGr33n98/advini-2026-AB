class Lead < ApplicationRecord
  belongs_to :user
  belongs_to :product
  belongs_to :vendor

  validates :user_id, :product_id, :vendor_id, presence: true
end
