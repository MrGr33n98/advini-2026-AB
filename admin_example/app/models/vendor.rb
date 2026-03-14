class Vendor < ApplicationRecord
  has_many :products, dependent: :destroy
  has_many :leads, dependent: :destroy
  
  validates :name, presence: true, uniqueness: true
end
