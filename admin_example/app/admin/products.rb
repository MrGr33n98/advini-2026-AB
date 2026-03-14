ActiveAdmin.register Product do
  permit_params :name, :description, :vendor_id, :category_id, :status, :website_url

  # 📊 Scopes (Filtros Rápidos do Topo conforme solicitado)
  scope :all, default: true
  scope :pendentes, -> { where(status: :pending) }
  scope :aprovados, -> { where(status: :approved) }
  scope :cancelados, -> { where(status: :cancelled) }

  filter :name
  filter :category
  filter :vendor
  filter :status, as: :select, collection: Product.statuses

  index do
    selectable_column
    id_column
    column :name
    column :category
    column :vendor
    column :status do |product|
      status_tag product.status
    end
    actions
  end

  form do |f|
    f.inputs 'Detalhes do Produto' do
      f.input :name
      f.input :category
      f.input :vendor
      f.input :status, as: :select, collection: Product.statuses.keys
      f.input :website_url
      f.input :description
    end
    f.actions
  end
end
