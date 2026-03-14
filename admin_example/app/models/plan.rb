class Plan < ApplicationRecord
  enum status: { active: 0, inactive: 1 }
  validates :name, :price, presence: true
end
