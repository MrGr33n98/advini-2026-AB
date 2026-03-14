class ProductBlueprint < Blueprinter::Base
  identifier :id
  fields :name, :description, :website_url, :status
  
  association :category, blueprint: CategoryBlueprint
  association :vendor, blueprint: VendorBlueprint

  view :extended do
    fields :created_at
  end
end
