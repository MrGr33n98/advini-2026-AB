# frozen_string_literal: true

ActiveAdmin.register_page 'Dashboard' do
  menu priority: 1, label: proc { 'Dashboard' }

  content title: proc { "LegalTech Admin Dashboard" } do
    div class: "blank_slate_container" do
      # KPI Cards using inline styles for immediate effect
      div class: "dashboard-stats", style: "display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;" do
        # Users Stats
        div class: "stat-card", style: "background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); border-bottom: 4px solid #3b82f6;" do
          h3 "Total Usuários", style: "margin: 0; font-size: 14px; color: #6b7280;"
          h2 (User.count rescue '0'), style: "margin: 10px 0; font-size: 32px; color: #111827;"
          small "Total na plataforma", style: "color: #9ca3af;"
        end
        
        # Products Stats
        div class: "stat-card", style: "background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); border-bottom: 4px solid #10b981;" do
          h3 "Produtos", style: "margin: 0; font-size: 14px; color: #6b7280;"
          h2 (Product.count rescue '0'), style: "margin: 10px 0; font-size: 32px; color: #111827;"
          small "Softwares jurídicos", style: "color: #9ca3af;"
        end
        
        # Reviews Stats
        div class: "stat-card", style: "background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); border-bottom: 4px solid #f59e0b;" do
          h3 "Reviews", style: "margin: 0; font-size: 14px; color: #6b7280;"
          h2 (Review.count rescue '0'), style: "margin: 10px 0; font-size: 32px; color: #111827;"
          small "Avaliações registradas", style: "color: #9ca3af;"
        end
        
        # Vendor Stats
        div class: "stat-card", style: "background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); border-bottom: 4px solid #8b5cf6;" do
          h3 "Fornecedores", style: "margin: 0; font-size: 14px; color: #6b7280;"
          h2 (Vendor.count rescue '0'), style: "margin: 10px 0; font-size: 32px; color: #111827;"
          small "Empresas ativas", style: "color: #9ca3af;"
        end
      end
      
      columns do
        column do
          panel "Ações Rápidas" do
            ul do
              li link_to("Ver Todos os Softwares", admin_products_path)
              li link_to("Moderar Últimas Reviews", admin_reviews_path)
              li link_to("Configurações das Categorias", admin_categories_path)
            end
          end
        end
        column do
          panel "Status do Sistema" do
            para "Base de dados: Conectada"
            para "Ambiente: #{Rails.env}"
          end
        end
      end
    end
  end # content
end
