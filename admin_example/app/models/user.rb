class User < ApplicationRecord
  self.implicit_order_column = "created_at"
  
  has_many :reviews, dependent: :destroy
  
  enum role: { lawyer: 0, vendor: 1, law_firm: 2 }
  enum verification_status: { pending: 0, verified: 1, rejected: 2 }
  
  def full_name
    "#{first_name} #{last_name}".strip.presence || name || email
  end

  def self.ransackable_attributes(_auth_object = nil)
    %w[id name email role oab_number oab_state verification_status created_at]
  end

  def self.ransackable_associations(_auth_object = nil)
    %w[reviews]
  end
end
