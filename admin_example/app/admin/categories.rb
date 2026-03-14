ActiveAdmin.register Category do
  permit_params :name, :description, :parent_id

  index do
    selectable_column
    id_column
    column :name
    column :parent
    actions
  end

  filter :name
  filter :parent, as: :select, collection: Category.main

  form do |f|
    f.inputs do
      f.input :name
      f.input :parent, as: :select, collection: Category.main
      f.input :description
    end
    f.actions
  end
end
