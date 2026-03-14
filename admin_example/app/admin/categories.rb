ActiveAdmin.register Category do
  menu priority: 3, label: "Categorias"
  
  permit_params :name, :description, :slug, :parent_id, :icon, :featured, :sort_order

  index do
    selectable_column
    id_column
    column :name
    column :parent
    column :featured
    column :sort_order
    actions
  end

  filter :name
  filter :parent
  filter :featured
end
