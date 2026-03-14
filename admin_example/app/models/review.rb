class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product

  # Status da Avaliação
  enum status: { pending: 0, approved: 1, cancelled: 2, reported: 3 }

  validates :rating, inclusion: { in: 1..5 }
  validates :comment, presence: true
end
