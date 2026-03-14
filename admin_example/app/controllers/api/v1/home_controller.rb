module Api
  module V1
    class HomeController < ApplicationController
      def index
        render json: {
          featured_products: Product.limit(6).map { |p| product_json(p) },
          stats: {
            total_users: User.count,
            total_reviews: Review.count,
            total_products: Product.count
          },
          categories: Category.roots.limit(8).map { |c| { id: c.id, name: c.name, slug: c.slug } }
        }
      end

      private

      def product_json(product)
        {
          id: product.id,
          name: product.name,
          slug: product.slug,
          average_rating: product.average_rating,
          reviews_count: product.reviews_count,
          vendor_name: product.vendor.name
        }
      end
    end
  end
end
