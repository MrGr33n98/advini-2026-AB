class User < ApplicationRecord
  # Roles: Administrador, Advogado, Escritório, Fornecedor (Vendor), Equipe
  enum role: { admin: 0, lawyer: 1, law_firm: 2, vendor: 3, company_member: 4 }
  
  has_many :reviews
  has_many :claims
  
  validates :email, presence: true, uniqueness: true

  self.implicit_order_column = "created_at"
  
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
