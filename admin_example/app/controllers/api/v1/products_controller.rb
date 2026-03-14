module Api
  module V1
    class ProductsController < ApplicationController
      def index
        # Apenas softwares aprovados aparecem no site para o público
        @products = Product.approved.includes(:category, :vendor)
        
        # Filtro por categoria se vier na URL
        @products = @products.where(category_id: params[:category_id]) if params[:category_id].present?

        render json: {
          products: Blueprinter::Render.parse(ProductBlueprint.render(@products)),
          categories: Category.all
        }
      end

      def show
        @product = Product.approved.find(params[:id])
        render json: {
          product: Blueprinter::Render.parse(ProductBlueprint.render(@product, view: :extended)),
          reviews: Blueprinter::Render.parse(ReviewBlueprint.render(@product.reviews.approved))
        }
      end
    end
  end
end
