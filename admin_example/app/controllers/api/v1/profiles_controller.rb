module Api
  module V1
    class ProfilesController < ApplicationController
      # Em uma construção real, usaríamos authenticate_user!
      # Para fins de demonstração, simulamos o usuário logado
      def show
        # Simula o primeiro usuário ou o current_user
        @user = User.first || User.create(email: "advogado@exemplo.com", role: :lawyer)
        
        render json: {
          user: @user.as_json(only: [:email, :role, :company_name]),
          reviews: Blueprinter::Render.parse(ReviewBlueprint.render(@user.reviews)),
          badges: @user.badges.as_json(only: [:name, :icon, :description]),
          stats: {
            total_reviews: @user.reviews.count,
            approved_reviews: @user.reviews.approved.count,
            earned_badges: @user.badges.count
          }
        }
      end
    end
  end
end
