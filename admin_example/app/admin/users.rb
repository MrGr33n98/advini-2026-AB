ActiveAdmin.register User do
  permit_params :email, :role, :company_name, :document_number

  # 👥 Scopes para segmentação de usuários
  scope :all, default: true
  scope :advogados, -> { where(role: :lawyer) }
  scope :escritorios, -> { where(role: :law_firm) }
  scope :fornecedores, -> { where(role: :vendor) }
  scope :equipe, -> { where(role: :company_member) }

  index do
    selectable_column
    id_column
    column :email
    column :role do |user|
      status_tag user.role
    end
    column :company_name
    column :created_at
    actions
  end

  filter :email
  filter :role, as: :select, collection: User.roles
  filter :company_name
end
