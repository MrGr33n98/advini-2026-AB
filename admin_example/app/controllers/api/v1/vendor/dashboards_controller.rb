module Api
  module V1
    module Vendor
      class DashboardsController < ApplicationController
        # Simula o vendor logado
        def show
          @vendor = ::Vendor.first || ::Vendor.create(name: "Vendor Exemplo")
          
          render json: {
            vendor: @vendor.as_json(only: [:name, :website_url]),
            stats: {
              total_products: @vendor.products.count,
              total_leads: @vendor.leads.count,
              total_reviews: @vendor.products.joins(:reviews).count
            },
            leads: @vendor.leads.includes(:user, :product).map { |lead|
              {
                id: lead.id,
                lawyer_email: lead.user.email,
                product_name: lead.product.name,
                created_at: lead.created_at
              }
            },
            products: @vendor.products.map { |p|
              {
                id: p.id,
                name: p.name,
                status: p.status,
                reviews_count: p.reviews.count
              }
            }
          }
        end
      end
    end
  end
end
