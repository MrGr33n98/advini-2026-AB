ActiveAdmin.register Review do
  menu priority: 5, label: "Avaliações"
  
  permit_params :product_id, :user_id, :title, :content, :rating, :ease_of_use_rating, 
                :support_rating, :value_rating, :features_rating, :status

  index do
    selectable_column
    id_column
    column :product
    column :user
    column :rating
    column :status
    column :created_at
    actions
  end

  filter :product
  filter :user
  filter :rating
  filter :status
end
