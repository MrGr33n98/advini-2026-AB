ActiveAdmin.register Product do
  menu priority: 4, label: "Produtos"
  
  permit_params :name, :vendor_id, :category_id, :slug, :short_description, :full_description, 
                :average_rating, :reviews_count, :base_price_monthly, :base_price_yearly, 
                :has_free_trial, :is_verified, :is_top_rated

  index do
    selectable_column
    id_column
    column :name
    column :vendor
    column :category
    column :is_verified
    column :is_top_rated
    actions
  end

  filter :name
  filter :vendor
  filter :category
  filter :is_verified
end
