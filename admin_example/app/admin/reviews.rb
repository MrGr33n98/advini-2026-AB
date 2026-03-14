ActiveAdmin.register Review do
  permit_params :status, :rating, :comment

  # ⭐ Scopes de Moderação
  scope :all, default: true
  scope :pendentes, -> { where(status: :pending) }
  scope :aprovadas, -> { where(status: :approved) }
  scope :denunciadas, -> { where(status: :reported) }

  index do
    selectable_column
    id_column
    column :product
    column :user
    column :rating do |r|
      "#{r.rating} ⭐"
    end
    column :status do |r|
      status_tag r.status
    end
    column :created_at
    actions
  end

  # Ações rápidas de moderação
  member_action :approve, method: :put do
    resource.approved!
    redirect_to resource_path, notice: "Review aprovada com sucesso!"
  end

  action_item :approve, only: :show do
    link_to "Aprovar Review", approve_admin_review_path(review), method: :put if review.pending?
  end
end
