class ReviewBlueprint < Blueprinter::Base
  identifier :id
  fields :rating, :comment, :created_at
  
  association :user, blueprint: UserBlueprint
end
