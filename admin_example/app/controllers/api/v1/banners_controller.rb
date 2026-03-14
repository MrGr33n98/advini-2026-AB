module Api
  module V1
    class BannersController < ApplicationController
      def index
        # Retorna banners baseados no local (placement) e se estão ativos
        banners = Banner.active_now
        banners = banners.where(placement: params[:placement]) if params[:placement].present?
        banners = banners.where(category_id: params[:category_id]) if params[:category_id].present?

        render json: {
          banners: banners.as_json(only: [:id, :title, :subtitle, :image_url, :cta_url, :placement])
        }
      end
    end
  end
end
