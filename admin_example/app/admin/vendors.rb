ActiveAdmin.register Vendor do
  menu priority: 2, label: "Fornecedores"
  
  permit_params :name, :logo_url, :website_url, :is_verified

  index do
    selectable_column
    id_column
    column :name
    column :website_url
    column :is_verified
    column :created_at
    actions
  end

  filter :name
  filter :is_verified
  filter :created_at
end
